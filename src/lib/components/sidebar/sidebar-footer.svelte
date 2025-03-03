<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Avatar from "$lib/components/ui/avatar/index";
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
</script>

<Sidebar.Menu>
    <Sidebar.MenuItem>
        <Sidebar.MenuButton>
            {#snippet tooltipContent()}
                {m.nav_language()}
            {/snippet}
            <Globe />
            <span>{m.nav_language()}</span>
        </Sidebar.MenuButton>
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
                side={Sidebar.useSidebar().isMobile ? "bottom" : "right"}
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
        <Sidebar.MenuButton>
            <!-- TODO: this. -->
            {#snippet tooltipContent()}
                {m.nav_close()}
            {/snippet}
            <PanelLeftClose />
            <span>{m.nav_close()}</span>
        </Sidebar.MenuButton>
    </Sidebar.MenuItem>
</Sidebar.Menu>
