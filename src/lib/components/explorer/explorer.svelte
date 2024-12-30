<script lang="ts" module>
    import type { Album } from "$lib/types";
    import ActionPane from "./action-pane.svelte";
    import YearCarousel from "./year-carousel.svelte";

    export interface ExplorerProps {
        album: Album;
    }
</script>

<script lang="ts">
    const { album }: ExplorerProps = $props();
</script>

<header class="flex flex-col gap-2 border-b p-2">
    <YearCarousel {...album} />
    <ActionPane {...album} />
</header>

<section>
    
</section>