<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    
    import House from "lucide-svelte/icons/house";
    import History from "lucide-svelte/icons/history";
    import Heart from "lucide-svelte/icons/heart";
    import Image from "lucide-svelte/icons/image";
    import Video from "lucide-svelte/icons/video";
    import Scroll from "lucide-svelte/icons/scroll";
    import Shapes from "lucide-svelte/icons/shapes";
    import Newspaper from "lucide-svelte/icons/newspaper";
    import FileText from "lucide-svelte/icons/file-text";
    import MicVocal from "lucide-svelte/icons/mic-vocal";
    import NavHeader from "./nav-header.svelte";
    import Search from "lucide-svelte/icons/search";
    import NavFooter from "./nav-footer.svelte";

    import * as m from "$lib/paraglide/messages";

    const groups = [
        {
            title: m.nav_explore(),
            items: [
                { title: m.nav_home(), icon: House, url: "#" },
                { title: m.nav_latest(), icon: History, url: "#" },
                { title: m.nav_liked(), icon: Heart, url: "#" }
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
</script>

<Sidebar.Root collapsible="icon">
    <Sidebar.Header>
        <NavHeader />
    </Sidebar.Header>

    <Sidebar.Separator />

    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton>
                            <!-- TODO: style closer to figma mockup -->
                            {#snippet tooltipContent()}
                                {m.nav_search()}
                            {/snippet}
                            <Search />
                            <span>{m.nav_search()}</span>
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
        <NavFooter />
    </Sidebar.Footer>
    <Sidebar.Rail />
</Sidebar.Root>
