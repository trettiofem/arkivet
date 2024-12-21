<script lang="ts">
    import type { Component } from "svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Tooltip from "$lib/components/ui/tooltip";
    import { Icon as IconType } from "lucide-svelte";

    const { text, Icon, href, selected, collapsed }: { text: string; Icon: typeof IconType; href?: string; selected: boolean; collapsed: boolean } = $props();
</script>

{#if collapsed}
    <Tooltip.Root openDelay={100}>
        <Tooltip.Trigger asChild let:builder>
            <Button on:click builders={[builder]} variant={selected ? "pink" : "ghost"} size="icon" {href}>
                <Icon size={16} class="shrink-0"/>
            </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">
            <p>{text}</p>
        </Tooltip.Content>
    </Tooltip.Root>
{:else}
    <Button on:click variant={selected ? "pink" : "ghost"} size="sm" class="justify-start" {href}>
        <Icon size={16} class="mr-2 shrink-0"/>
        <span>{text}</span>
    </Button>
{/if}
