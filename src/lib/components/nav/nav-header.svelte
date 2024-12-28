<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Avatar from "$lib/components/ui/avatar/index";

    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import Settings from "lucide-svelte/icons/settings";
    import LogOut from "lucide-svelte/icons/log-out";

    import * as m from "$lib/paraglide/messages";
</script>

<Sidebar.Menu>
    <Sidebar.MenuItem>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        {...props}
                    >
                        <Avatar.Root class="size-8">
                            <Avatar.Image
                                src="https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png"
                                alt="@ja27jo32"
                            />
                            <Avatar.Fallback class="bg-råsa-true font-mono text-white">
                                JJ
                            </Avatar.Fallback>
                        </Avatar.Root>

                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">Jacob Johansson</span>
                            <span class="truncate font-mono text-xs">{"@ja2732jo-s"}</span>
                        </div>

                        <ChevronsUpDown class="ml-auto" />
                    </Sidebar.MenuButton>
                {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
                align="start"
                side={Sidebar.useSidebar().isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
                <DropdownMenu.Label class="font-mono text-xs text-muted-foreground">
                    {"@ja2732jo-s"}
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                    <CircleUser />
                    {m.nav_user_profile()}
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Settings />
                    {m.nav_user_settings()}
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                    <LogOut />
                    {m.nav_user_log_out()}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>
</Sidebar.Menu>
