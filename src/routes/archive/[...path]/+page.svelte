<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<p>{JSON.stringify(data)}</p>
<div>
    <Button variant="default">OK</Button>
    <Button variant="secondary">OK</Button>
    <Button variant="råsa">OK</Button>
    <Button variant="lila">OK</Button>
    <Button variant="destructive">OK</Button>
    <Button variant="outline">OK</Button>
    <Button variant="ghost">OK</Button>
    <Button variant="link">OK</Button>
</div>
