<script lang="ts">
    import { toggleMode, mode } from "mode-watcher";

    import UserBadge from "./UserBadge.svelte";
    import MenuItem from "./MenuItem.svelte";

    // Icons
    import Search from "lucide-svelte/icons/search";

    import Home from "lucide-svelte/icons/house";
    import History from "lucide-svelte/icons/history";
    import Heart from "lucide-svelte/icons/heart";

    import Image from "lucide-svelte/icons/image";
    import Video from "lucide-svelte/icons/video";
    import Poster from "lucide-svelte/icons/scroll";
    import Patches from "lucide-svelte/icons/shapes";
    import News from "lucide-svelte/icons/newspaper";

    import Document from "lucide-svelte/icons/file-text";
    import Song from "lucide-svelte/icons/mic-vocal";
    import Megaphone from "lucide-svelte/icons/megaphone";
    import Website from "lucide-svelte/icons/globe";

    import Language from "lucide-svelte/icons/languages";
    import DarkMode from "lucide-svelte/icons/moon";
    import LightMode from "lucide-svelte/icons/sun";

    const { collapsed }: { collapsed: boolean } = $props();

    const sections = [
        {
            title: "Utforska",
            items: [
                { text: "Hem", icon: Home, href: "#", selected: true },
                { text: "Senaste", icon: History, href: "#", selected: false },
                { text: "Gillade", icon: Heart, href: "#", selected: false }
            ]
        },
        {
            title: "Media",
            items: [
                { text: "Bilder", icon: Image, href: "#", selected: false },
                { text: "Filmer", icon: Video, href: "#", selected: false },
                { text: "Affischer", icon: Poster, href: "#", selected: false },
                { text: "Märken", icon: Patches, href: "#", selected: false },
                { text: "Tidningar", icon: News, href: "#", selected: false }
            ]
        },
        {
            title: "Övrigt",
            items: [
                { text: "Dokument", icon: Document, href: "#", selected: false },
                { text: "Sånger", icon: Song, href: "#", selected: false },
                { text: "D'du", icon: Megaphone, href: "#", selected: false },
                { text: "Hemsidor", icon: Website, href: "#", selected: false }
            ]
        }
    ];
</script>

<nav class="flex h-full flex-col gap-4 p-4">
    <UserBadge {collapsed} />

    <MenuItem text="Sök" Icon={Search} href="#" selected={false} {collapsed} />

    {#each sections as section}
        <div class="flex flex-col gap-1">
            {#if !collapsed}
                <p class="text-xs font-semibold text-muted-foreground">{section.title}</p>
            {/if}

            {#each section.items as item}
                <MenuItem text={item.text} Icon={item.icon} href={item.href} selected={item.selected} {collapsed} />
            {/each}
        </div>
    {/each}

    <div class="grow" />

    <div class="flex flex-col gap-1">
        {#if !collapsed}
            <p class="text-xs font-semibold text-muted-foreground">Inställningar</p>
        {/if}
        <MenuItem
            text={$mode === "dark" ? "Ljust läge" : "Mörkt läge"}
            Icon={$mode === "dark" ? LightMode : DarkMode}
            on:click={toggleMode}
            href="#"
            selected={false}
            {collapsed}
        />
        <MenuItem text="Ändra språk" Icon={Language} href="#" selected={false} {collapsed} />
    </div>
</nav>
