<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import MainSidebar from "$lib/components/main-sidebar.svelte";

    let { children } = $props();
</script>

<Sidebar.Provider>
    <MainSidebar />
    {@render children()}
</Sidebar.Provider>
