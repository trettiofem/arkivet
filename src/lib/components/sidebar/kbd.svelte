<script lang="ts" module>
    export interface KbdProps {
        key: string;
        display?: string;
    }
</script>

<script lang="ts">
    import { cn } from "$lib/utils";
    import { onMount } from "svelte";

    const { key, display }: KbdProps = $props();
    let highlight = $state(false);

    const setHighlight = (e: KeyboardEvent) =>
        e.key.toLowerCase() === key.toLowerCase() && (highlight = true);
    const clearHighlight = () => (highlight = false);

    onMount(() => {
        window.addEventListener("keydown", setHighlight);
        window.addEventListener("keyup", clearHighlight);

        return () => {
            window.removeEventListener("keydown", setHighlight);
            window.removeEventListener("keyup", clearHighlight);
        };
    });
</script>

<span
    data-highlight={highlight}
    class={cn(
        "flex h-6 min-w-6 items-center justify-center rounded-md border bg-background px-1 font-semibold text-muted-foreground transition-colors duration-100",
        "data-[highlight=true]:border-råsa-border data-[highlight=true]:bg-råsa data-[highlight=true]:text-råsa-foreground"
    )}
>
    {display ? display : key}
</span>
