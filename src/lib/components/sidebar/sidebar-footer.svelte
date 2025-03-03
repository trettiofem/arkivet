<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import {
        Globe,
        SunMoon,
        PanelLeftClose,
        PanelLeftOpen,
        Sun,
        Moon,
        Computer
    } from "lucide-svelte";

    import * as m from "$lib/paraglide/messages";
    import { setMode } from "mode-watcher";

    const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Menu>
    <Sidebar.MenuItem>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton class="data-[state=open]:bg-sidebar-accent" {...props}>
                        <!-- TODO: fix this? -->
                        <!-- {#snippet tooltipContent()} -->
                        <!--     {m.nav_language()} -->
                        <!-- {/snippet} -->
                        <Globe />
                        <span>{m.nav_language()}</span>
                    </Sidebar.MenuButton>
                {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="w-[--bits-dropdown-menu-anchor-width] min-w-56"
                align="end"
                side={sidebar.isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
                <DropdownMenu.Label class="text-xs text-muted-foreground">
                    {m.nav_language()}
                </DropdownMenu.Label>

                <DropdownMenu.Item>
                    {#snippet child({ props })}
                        <!-- TODO: undersök om href="#" alltid fungerar -->
                        <a href="#" hreflang="sv" {...props}>{"🇸🇪 Svenska"}</a>
                    {/snippet}
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                    {#snippet child({ props })}
                        <a href="#" hreflang="en" {...props}>{"🇬🇧 English"}</a>
                    {/snippet}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>

    <Sidebar.MenuItem>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton class="data-[state=open]:bg-sidebar-accent" {...props}>
                        <!-- TODO: fix this? -->
                        <!-- {#snippet tooltipContent()} -->
                        <!--     {"Ljusläge"} -->
                        <!-- {/snippet} -->
                        <SunMoon />
                        <span>{m.nav_color_scheme()}</span>
                    </Sidebar.MenuButton>
                {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="w-[--bits-dropdown-menu-anchor-width] min-w-56"
                align="end"
                side={sidebar.isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
                <DropdownMenu.Label class="text-xs text-muted-foreground">
                    {m.nav_color_scheme()}
                </DropdownMenu.Label>

                <DropdownMenu.Item onclick={() => setMode("light")}>
                    <Sun />
                    {m.nav_color_scheme_light()}
                </DropdownMenu.Item>

                <DropdownMenu.Item onclick={() => setMode("dark")}>
                    <Moon />
                    {m.nav_color_scheme_dark()}
                </DropdownMenu.Item>

                <DropdownMenu.Separator />

                <DropdownMenu.Item onclick={() => setMode("system")}>
                    <Computer />
                    {m.nav_color_scheme_system()}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>

    <Sidebar.MenuItem>
        <Sidebar.MenuButton onclick={() => sidebar.toggle()}>
            {#snippet tooltipContent()}
                {m.nav_open()}
            {/snippet}

            {#if sidebar.open}
                <PanelLeftClose />
            {:else}
                <PanelLeftOpen />
            {/if}

            <span>{m.nav_close()}</span>
        </Sidebar.MenuButton>
    </Sidebar.MenuItem>
</Sidebar.Menu>
