<script lang="ts" module>
    import type { Album } from "$lib/types";
    import type { ResourceType } from "@prisma/client";
    import type { Component } from "svelte";
    import type { ViewProps } from "../views/types";
    import ImageView from "../views/image-view.svelte";
    import FileView from "../views/file-view.svelte";

    export interface ExplorerProps {
        album: Album;
    }

    const views: { type: ResourceType | "*"; view: Component<ViewProps> }[] = [
        { type: "IMAGE", view: ImageView },
        { type: "FILE", view: FileView }
    ];
</script>

<script lang="ts">
    import * as ContextMenu from "$lib/components/ui/context-menu/index";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import ActionPane from "./actions.svelte";
    import YearCarousel from "./year-slider.svelte";
    import Button from "../ui/button/button.svelte";
    import * as m from "$lib/paraglide/messages";

    const { album }: ExplorerProps = $props();

    const ContentView: Component<ViewProps> = $derived.by(() => {
        const v = views.find((v) => v.type === album.type);

        if (v) return v.view;
        return FileView;
    });
</script>

<header class="flex flex-col gap-2 border-b p-2">
    <YearCarousel {...album} />
    <ActionPane {...album} />
</header>

<ContextMenu.Root>
    <ContextMenu.Trigger>
        {#snippet child({ props })}
            <ScrollArea class="h-1 grow" {...props}>
                {#if album.resources.length === 0 && album.albums.length === 0}
                    <!-- TODO: add an "empty", or "404" attribute or smth -->
                    <div class="flex size-full items-center justify-center">
                        <div class="flex flex-row items-center gap-8">
                            <!-- Note: the size of the image is hard coded in order to avoid pop-in. -->
                            <img src="/råsa.webp" alt="" class="h-[384px] w-[324px]" />

                            <div class="flex max-w-96 flex-col items-start gap-2">
                                <p class="text-4xl font-semibold tracking-tight">{m.explorer_404_title()}</p>
                                <p>{m.explorer_404_help_1()}</p>
                                <ul class="list-inside list-disc">
                                    <li>{m.explorer_404_help_2()}</li>
                                    <li>{m.explorer_404_help_3()}</li>
                                    <li>{m.explorer_404_help_4()}</li>
                                </ul>
                                <p>{m.explorer_404_help_5()}</p>
                                <Button variant="råsa">{m.explorer_404_report()}</Button>
                            </div>
                        </div>
                    </div>
                {:else}
                    <ContentView {album} />
                {/if}
            </ScrollArea>
        {/snippet}
    </ContextMenu.Trigger>
    <ContextMenu.Content>
        <!-- TODO: add icons and stuff -->
        <ContextMenu.Item>{m.explorer_menu_back()}</ContextMenu.Item>
        <ContextMenu.Item>{m.explorer_menu_forward()}</ContextMenu.Item>
        <ContextMenu.Item>{m.explorer_menu_parent()}</ContextMenu.Item>
        <ContextMenu.Item>{m.explorer_menu_refresh()}</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Item>{m.explorer_menu_bookmark()}</ContextMenu.Item>
        <ContextMenu.Item>{m.explorer_menu_sort_by()}</ContextMenu.Item>
        <ContextMenu.Item>{m.explorer_menu_settings()}</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Item>{m.explorer_menu_report()}</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Item>{m.explorer_menu_upload()}</ContextMenu.Item>
    </ContextMenu.Content>
</ContextMenu.Root>
