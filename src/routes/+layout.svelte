<script lang="ts">
    import { ParaglideJS } from "@inlang/paraglide-sveltekit";
    import { i18n } from "$lib/i18n";

    import "../app.css";

    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import NavMain from "$lib/components/nav/nav-main.svelte";

    let { children } = $props();
</script>

<ParaglideJS {i18n}>
    <Sidebar.Provider>
        <NavMain />
        <Sidebar.Inset>
            {@render children()}
        </Sidebar.Inset>
    </Sidebar.Provider>
</ParaglideJS>
