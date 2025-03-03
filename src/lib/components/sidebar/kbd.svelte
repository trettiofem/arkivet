<script lang="ts" module>
    export interface KbdProps {
        key: string;
    }
</script>

<script lang="ts">
    const { key }: KbdProps = $props();
</script>

<span
    class="flex h-6 min-w-6 items-center justify-center rounded-md border bg-background px-1 font-semibold text-muted-foreground"
>
    {key}
</span>
