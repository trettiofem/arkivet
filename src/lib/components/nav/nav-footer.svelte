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
</script>

<Sidebar.Menu>
    <Sidebar.MenuItem>
        <Sidebar.MenuButton>
            {#snippet tooltipContent()}
                {"Ändra språk"}
            {/snippet}
            <Globe />
            <span>Ändra språk</span>
        </Sidebar.MenuButton>
    </Sidebar.MenuItem>

    <Sidebar.MenuItem>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton {...props}>
                        {#snippet tooltipContent()}
                            {"Ljusläge"}
                        {/snippet}
                        <SunMoon />
                        <span>Ljusläge</span>
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
                    Välj ljusläge
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                    <Sun />
                    Ljust
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Moon />
                    Mörkt
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                    <Computer />
                    System
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>

    <Sidebar.MenuItem>
        <Sidebar.MenuButton>
            {#snippet tooltipContent()}
                {"Stäng sidopanel"}
            {/snippet}
            <PanelLeftClose />
            <span>Stäng sidopanel</span>
        </Sidebar.MenuButton>
    </Sidebar.MenuItem>
</Sidebar.Menu>
