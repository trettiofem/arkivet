<script lang="ts" module>
    import { Image, Video, Scroll, Shapes, Newspaper, FileText, MicVocal } from "lucide-svelte";
    const ALBUM_ICONS = [
        { name: "Bilder", icon: Image },
        { name: "Filmer", icon: Video },
        { name: "Affischer", icon: Scroll },
        { name: "Märken", icon: Shapes },
        { name: "Tidningar", icon: Newspaper },
        { name: "Dokument", icon: FileText },
        { name: "Sånger", icon: MicVocal }
    ];

    export interface ActionPaneProps {
        path: string;
        name: string;
    }
</script>

<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
    import Button from "../ui/button/button.svelte";
    import { goto, invalidateAll } from "$app/navigation";
    import { languageTag, sourceLanguageTag } from "$lib/paraglide/runtime";
    import {
        ArrowLeft,
        ArrowRight,
        ArrowUp,
        RefreshCw,
        Archive,
        Bookmark,
        FolderSearch,
        ChevronDown,
        ArrowDownAZ,
        Settings
    } from "lucide-svelte";

    const { path, name }: ActionPaneProps = $props();
    const splitPath = $derived(path === "" ? [] : path.split("/"));

    // This accounts for the fact that server hooks don't get called when we run goto()
    // Server hooks are used here to determine language settings
    // TODO: (maybe) move to utils? Only if useful elsewhere
    const getLanguageTag = () => (languageTag() !== sourceLanguageTag ? "/" + languageTag() : "");

    const getSlicedHref = (index: number) => {
        return "/archive/" + splitPath.slice(0, index).join("/");
    };
</script>

{#snippet breadcrumb(slug: string)}
    {@const album = ALBUM_ICONS.find(({ name }) => name === slug)}
    {#if album}
        <album.icon class="size-4" />
    {:else}
        {slug}
    {/if}
{/snippet}

<div class="flex flex-row gap-2">
    <Button variant="outline" size="icon" onclick={() => history.back()}>
        <ArrowLeft />
    </Button>
    <Button variant="outline" size="icon" onclick={() => history.forward()}>
        <ArrowRight />
    </Button>
    <Button
        variant="outline"
        size="icon"
        disabled={path === ""}
        onclick={() => goto(getLanguageTag() + getSlicedHref(Infinity))}
    >
        <ArrowUp />
    </Button>
    <Button variant="outline" size="icon" onclick={() => invalidateAll()}>
        <RefreshCw />
    </Button>

    <div class="flex h-10 w-full items-center rounded-md border px-3">
        <Breadcrumb.Root>
            <Breadcrumb.List>
                <Archive class="size-4" />
                <Breadcrumb.Separator />

                {#each splitPath as slug, i}
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href={getSlicedHref(i + 1)}>
                            {@render breadcrumb(slug)}
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                {/each}

                <Breadcrumb.Item>
                    <Breadcrumb.Page>
                        {@render breadcrumb(name)}
                    </Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>

    <!-- TODO: add functionality here -->
    <Button variant="outline" size="icon"><FolderSearch /></Button>
    <Button variant="outline" size="icon"><Bookmark /></Button>

    <Button variant="outline" class="h-10 px-3">
        <ArrowDownAZ />
        <ChevronDown class="text-muted-foreground" />
    </Button>

    <Button variant="outline" class="h-10 px-3">
        <Settings />
        <ChevronDown class="text-muted-foreground" />
    </Button>
</div>
