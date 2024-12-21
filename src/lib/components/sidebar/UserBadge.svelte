<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Avatar from "$lib/components/ui/avatar";
    import { Badge } from "$lib/components/ui/badge";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    import User from "lucide-svelte/icons/user";
    import Files from "lucide-svelte/icons/files";
    import Settings from "lucide-svelte/icons/settings";
    import LogOut from "lucide-svelte/icons/log-out";

    import Chevron from "lucide-svelte/icons/chevron-down";

    const { collapsed }: { collapsed: boolean } = $props();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        {#if collapsed}
            <Button builders={[builder]} variant="outline" size="icon">
                <Avatar.Root class="size-6">
                    <Avatar.Image src="/hampton.jpg" alt="@trettiofem" />
                    <Avatar.Fallback>JJ</Avatar.Fallback>
                </Avatar.Root>
            </Button>
        {:else}
            <Button builders={[builder]} variant="outline" class="h-fit justify-start gap-2 overflow-hidden p-2">
                <Avatar.Root class="size-6">
                    <Avatar.Image src="/hampton.jpg" alt="@trettiofem" />
                    <Avatar.Fallback>JJ</Avatar.Fallback>
                </Avatar.Root>

                <div class="flex grow flex-col items-start text-wrap text-left">
                    <p class="line-clamp-1 text-xs">Jacob Johansson <Badge variant="pink" class="border-0">D21</Badge></p>
                    <p class="line-clamp-1 font-mono text-xs text-muted-foreground">@ja2732jo-s</p>
                </div>

                <Chevron size={16} class="shrink-0 text-muted-foreground" />
            </Button>
        {/if}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56" align="start">
        <DropdownMenu.Group></DropdownMenu.Group>
        <DropdownMenu.Item>
            <User class="mr-2 size-4" />
            <span>Profil</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            <Files class="mr-2 size-4" />
            <span>Inlägg</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            <Settings class="mr-2 size-4" />
            <span>Inställningar</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
            <LogOut class="mr-2 size-4" />
            <span>Logga ut</span>
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
