<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Avatar from "$lib/components/ui/avatar/index";
    import { ChevronsUpDown, CircleUser, Settings, LogOut } from "lucide-svelte";

    import * as m from "$lib/paraglide/messages";
    import YearBadge from "../year-badge.svelte";

    const user = {
        username: "ja2732jo-s",
        name: "Jacob Johansson",
        pfp: "https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png",
        program: "D21"
    };

    // TODO: add year badge after username
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
                            <Avatar.Image src={user.pfp} alt="@{user.username}" />
                            <Avatar.Fallback class="bg-råsa-true font-mono text-white">
                                J
                            </Avatar.Fallback>
                        </Avatar.Root>

                        <div class="flex flex-col text-sm leading-tight">
                            <span class="truncate font-semibold">{user.name} </span>
                            <span class="truncate font-mono text-xs">@{user.username}</span>
                        </div>

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
                    <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <div class="flex flex-col text-sm leading-tight">
                            <span class="truncate font-semibold">{user.name}</span>
                            <span class="truncate font-mono text-xs">@{user.username}</span>
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
                    <Settings />
                    {m.nav_user_settings()}
                </DropdownMenu.Item>

                <DropdownMenu.Separator />

                <DropdownMenu.Item>
                    <LogOut />
                    {m.nav_user_sign_out()}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>
</Sidebar.Menu>
