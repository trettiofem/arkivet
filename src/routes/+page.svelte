<script lang="ts">
    import * as Resizable from "$lib/components/ui/resizable";
    import Menu from "$lib/components/sidebar/Menu.svelte";
    import Navigation from "$lib/components/navigation/Navigation.svelte";
    import type { PaneAPI } from "paneforge";
    import { onMount } from "svelte";

    // Side panel constants
    // Measured in pixels
    const MAX_SIZE = 288;
    const MIN_SIZE = 192;
    const COLLAPSED_SIZE = 72;

    let pane: PaneAPI | undefined = $state(undefined);
    let collapsed = $state(false);
    let lastSize = 0;

    function pct(px: number): number {
        return (px / window.innerWidth) * 100;
    }

    function onWindowResize() {
        const ratio = lastSize / window.innerWidth;
        lastSize = window.innerWidth;

        if (pane) {
            pane.resize(pane.getSize() * ratio);
        }
    }

    // ?????
    // Pure trial and error...
    // See https://github.com/svecosystem/paneforge/issues/9
    function onResize(size: number, prevSize: number | undefined) {
        if (prevSize && pane) {
            if (size < pct(MIN_SIZE)) {
                pane.collapse();
                pane.resize(pct(COLLAPSED_SIZE));
                collapsed = true;
            }

            if (size > pct(MIN_SIZE)) {
                pane.expand();
                collapsed = false;
            }

            if (size > pct(MAX_SIZE)) {
                pane?.resize(pct(MAX_SIZE));
            }
        }
    }

    function onMenuStateChange(state: "expanded" | "collapsed"): void {
        if (pane) {
            if (state === "collapsed") {
                pane.resize(0);
            } else {
                pane.resize(100);
            }
        }
    }

    onMount(() => {
        window.addEventListener("resize", onWindowResize);
        lastSize = window.innerWidth;

        return () => {
            window.removeEventListener("resize", onWindowResize);
        };
    });
</script>

<main class="h-dvh w-dvw">
    <Resizable.PaneGroup direction="horizontal">
        <Resizable.Pane bind:pane {onResize}>
            <Menu {collapsed} {onMenuStateChange} />
        </Resizable.Pane>
        <Resizable.Handle withHandle />
        <Resizable.Pane>
            <Navigation />
        </Resizable.Pane>
    </Resizable.PaneGroup>
</main>
