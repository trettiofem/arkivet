<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import NavMain from "$lib/components/nav/nav-main.svelte";

    let { children } = $props();
</script>

<Sidebar.Provider>
    <NavMain />
    <Sidebar.Inset>
        {@render children()}
    </Sidebar.Inset>
</Sidebar.Provider>
