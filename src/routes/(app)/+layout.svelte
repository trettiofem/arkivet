<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import SidebarContent from "$lib/components/sidebar/sidebar-main.svelte";

    let { children } = $props();
</script>

<Sidebar.Provider>
    <SidebarContent />
    <Sidebar.Inset>
        {@render children()}
    </Sidebar.Inset>
</Sidebar.Provider>
