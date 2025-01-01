<script lang="ts">
    import { invalidate } from "$app/navigation";
    import { onMount } from "svelte";
    import { ModeWatcher } from "mode-watcher";
    import { ParaglideJS } from "@inlang/paraglide-sveltekit";
    import { i18n } from "$lib/i18n";
    import "../app.css";

    let { data, children } = $props();
    let { session, supabase } = $derived(data);

    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
            }
        });

        return () => data.subscription.unsubscribe();
    });
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
    {@render children()}
</ParaglideJS>
