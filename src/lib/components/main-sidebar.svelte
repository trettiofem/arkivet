<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
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

    const groups = [
        {
            title: "Utforska",
            items: [
                { title: "Hem", icon: House, url: "#" },
                { title: "Senaste", icon: History, url: "#" },
                { title: "Gillade", icon: Heart, url: "#" }
            ]
        },
        {
            title: "Media",
            items: [
                { title: "Bilder", icon: Image, url: "#" },
                { title: "Filmer", icon: Video, url: "#" },
                { title: "Affischer", icon: Scroll, url: "#" },
                { title: "Märken", icon: Shapes, url: "#" },
                { title: "Tidningar", icon: Newspaper, url: "#" }
            ]
        },
        {
            title: "Övrigt",
            items: [
                { title: "Dokument", icon: FileText, url: "#" },
                { title: "Sånger", icon: MicVocal, url: "#" }
            ]
        }
    ];
</script>

<Sidebar.Root>
    <Sidebar.Header>
        <p>Header</p>
    </Sidebar.Header>
    <Sidebar.Content>
        {#each groups as group (group.title)}
            <Sidebar.Group>
                <Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                    <Sidebar.Menu>
                        {#each group.items as item (item.title)}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton>
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
    <Sidebar.Footer>
        <p>Footer</p>
    </Sidebar.Footer>
</Sidebar.Root>
