<script lang="ts">
    import type { PageData } from "./$types";
    import type { Album } from "$lib/types";
    import Explorer from "$lib/components/explorer/explorer.svelte";

    const { data }: { data: Album } = $props();
</script>

<Explorer album={data} />