<script lang="ts">
    import { ModeWatcher } from "mode-watcher";
    import { ParaglideJS } from "@inlang/paraglide-sveltekit";
    import { i18n } from "$lib/i18n";
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import NavMain from "$lib/components/nav/nav-main.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
    <Sidebar.Provider>
        <NavMain />
        <Sidebar.Inset>
            {@render children()}
        </Sidebar.Inset>
    </Sidebar.Provider>
</ParaglideJS>
