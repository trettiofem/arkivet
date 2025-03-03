<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Avatar from "$lib/components/ui/avatar/index";
    import { ChevronsUpDown, CircleUser, Bookmark, Settings, LogOut, LogIn } from "lucide-svelte";

    import * as m from "$lib/paraglide/messages";
    import YearBadge from "../year-badge.svelte";

    // TODO: implement properly

    const user = {
        username: "ja2732jo-s",
        name: "Jacob Johansson",
        pfp: "https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png",
        program: "D21"
    };
</script>

<Sidebar.Menu>
    <Sidebar.MenuItem>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton
                        size="lg"
                        class="h-auto rounded-xl border py-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:rounded-md group-data-[collapsible=icon]:border-none"
                        {...props}
                    >
                        <Avatar.Root
                            class="size-6 rounded-md transition-[width,height] group-data-[collapsible=icon]:size-8"
                        >
                            <Avatar.Image src={user.pfp} alt={user.username} />
                            <Avatar.Fallback class="bg-råsa-true font-mono text-white">
                                {user.name[0]}
                            </Avatar.Fallback>
                        </Avatar.Root>

                        <span class="truncate text-sm">{user.name}</span>

                        <YearBadge program={user.program} />

                        <ChevronsUpDown class="ml-auto" />
                    </Sidebar.MenuButton>
                {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="w-[--bits-dropdown-menu-anchor-width] min-w-56"
                align="start"
                side={Sidebar.useSidebar().isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
                <DropdownMenu.Label class="p-0 font-normal">
                    <div class="flex items-center gap-2 p-1 text-left text-sm">
                        <Avatar.Root class="size-12 rounded-lg">
                            <Avatar.Image src={user.pfp} alt={user.username} />
                            <Avatar.Fallback class="bg-råsa-true font-mono text-white">
                                {user.name[0]}
                            </Avatar.Fallback>
                        </Avatar.Root>

                        <div class="flex flex-col overflow-hidden">
                            <span class="truncate text-sm">{user.name}</span>
                            <span class="truncate font-mono text-xs text-muted-foreground"
                                >{user.username}</span
                            >
                        </div>

                        <YearBadge program={user.program} />
                    </div>
                </DropdownMenu.Label>

                <DropdownMenu.Separator />

                <DropdownMenu.Item>
                    <CircleUser />
                    {m.nav_user_profile()}
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                    <Bookmark />
                    {m.nav_user_saved()}
                </DropdownMenu.Item>

                <DropdownMenu.Separator />

                <DropdownMenu.Item>
                    <Settings />
                    {m.nav_user_settings()}
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                    <LogOut />
                    {m.nav_user_sign_out()}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>
</Sidebar.Menu>
