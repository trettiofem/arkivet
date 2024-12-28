<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Avatar from "$lib/components/ui/avatar/index";

    import Globe from "lucide-svelte/icons/globe";
    import SunMoon from "lucide-svelte/icons/sun-moon";
    import PanelLeftClose from "lucide-svelte/icons/panel-left-close";
    import PanelLeftOpen from "lucide-svelte/icons/panel-left-open";

    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import Computer from "lucide-svelte/icons/computer";

    import * as m from "$lib/paraglide/messages";
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
                    <Sidebar.MenuButton {...props}>
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
                class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
                align="end"
                side={Sidebar.useSidebar().isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
                <DropdownMenu.Label class="text-xs text-muted-foreground">
                    {m.nav_color_scheme()}
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                    <Sun />
                    {m.nav_color_scheme_light()}
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Moon />
                    {m.nav_color_scheme_dark()}
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                    <Computer />
                    {m.nav_color_scheme_system()}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>

    <Sidebar.MenuItem>
        <Sidebar.MenuButton>
            {#snippet tooltipContent()}
                {m.nav_close()}
            {/snippet}
            <PanelLeftClose />
            <span>{m.nav_close()}</span>
        </Sidebar.MenuButton>
    </Sidebar.MenuItem>
</Sidebar.Menu>
