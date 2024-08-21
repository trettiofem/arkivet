<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.PaneGroup direction="horizontal">
    <Resizable.Pane defaultSize={25} maxSize={25}>
        <p>Hello</p>
    </Resizable.Pane>
    <Resizable.Handle withHandle />
    <Resizable.Pane>
        <p>World</p>
    </Resizable.Pane>
</Resizable.PaneGroup>