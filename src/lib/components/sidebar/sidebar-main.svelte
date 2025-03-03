<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import {
        House,
        History,
        Bookmark,
        Image,
        Video,
        Scroll,
        Shapes,
        Newspaper,
        FileText,
        MicVocal,
        Search
    } from "lucide-svelte";

    import SidebarHeader from "./sidebar-header.svelte";
    import SidebarFooter from "./sidebar-footer.svelte";

    import * as m from "$lib/paraglide/messages";
    import Kbd from "./kbd.svelte";

    const groups = [
        {
            title: m.nav_explore(),
            items: [
                { title: m.nav_home(), icon: House, url: "#" },
                { title: m.nav_latest(), icon: History, url: "#" },
                { title: m.nav_saved(), icon: Bookmark, url: "#" }
            ]
        },
        {
            title: m.nav_media(),
            items: [
                { title: m.nav_images(), icon: Image, url: "#" },
                { title: m.nav_videos(), icon: Video, url: "#" },
                { title: m.nav_posters(), icon: Scroll, url: "#" },
                { title: m.nav_patches(), icon: Shapes, url: "#" },
                { title: m.nav_magazines(), icon: Newspaper, url: "#" }
            ]
        },
        {
            title: m.nav_other(),
            items: [
                { title: m.nav_documents(), icon: FileText, url: "#" },
                { title: m.nav_songs(), icon: MicVocal, url: "#" }
            ]
        }
    ];

    // TODO: add ability to save album
</script>

<Sidebar.Root collapsible="icon">
    <Sidebar.Header>
        <SidebarHeader />
    </Sidebar.Header>

    <Sidebar.Separator />

    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton class="border py-2 h-auto rounded-xl group-data-[collapsible=icon]:rounded-md">
                            {#snippet tooltipContent()}
                                {m.nav_search()}
                            {/snippet}
                            <Search />
                            <span class="grow">{m.nav_search()}</span>

                            {#if !Sidebar.useSidebar().isMobile}
                                <div class="flex gap-1">
                                    <Kbd key="Control" display="Ctrl" />
                                    <Kbd key="K" />
                                </div>
                            {/if}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>

        {#each groups as group (group.title)}
            <Sidebar.Group>
                <Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                    <Sidebar.Menu>
                        {#each group.items as item (item.title)}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton>
                                    {#snippet tooltipContent()}
                                        {item.title}
                                    {/snippet}
                                    {#snippet child({ props })}
                                        <a href={item.url} {...props}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    {/snippet}
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        {/each}
                    </Sidebar.Menu>
                </Sidebar.GroupContent>
            </Sidebar.Group>
        {/each}
    </Sidebar.Content>

    <Sidebar.Separator />

    <Sidebar.Footer>
        <SidebarFooter />
    </Sidebar.Footer>
    <Sidebar.Rail />
</Sidebar.Root>
