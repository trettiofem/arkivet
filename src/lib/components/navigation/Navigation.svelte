<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import ArrowRight from "lucide-svelte/icons/arrow-right";
    import ArrowUp from "lucide-svelte/icons/arrow-up";
    import ArrowCW from "lucide-svelte/icons/rotate-cw";
    import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
    import Chevron from "lucide-svelte/icons/chevron-down";

    import YearSlider from "./YearSlider.svelte";
</script>

<nav class="flex flex-col gap-2 p-4">
    <div class="flex flex-row items-end gap-2">
        <YearSlider />
        <div class="flex flex-col gap-2">
            <Label for="show-unsorted" class="text-xs text-muted-foreground">Visa osorterat material</Label>
            <Switch id="show-unsorted" />
        </div>
    </div>
    <div class="flex flex-row gap-2">
        <Button variant="outline" size="icon"><ArrowLeft size={16} class="shrink-0" /></Button>
        <Button variant="outline" size="icon"><ArrowRight size={16} class="shrink-0" /></Button>
        <Button variant="outline" size="icon"><ArrowUp size={16} class="shrink-0" /></Button>
        <Button variant="outline" size="icon"><ArrowCW size={16} class="shrink-0" /></Button>

        <div class="rounded-md border border-input">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator><span>/</span></Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger class="flex items-center gap-1">
                                <Breadcrumb.Ellipsis class="h-4 w-4" />
                                <span class="sr-only">Toggle menu</span>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content align="start">
                                <DropdownMenu.Item>Documentation</DropdownMenu.Item>
                                <DropdownMenu.Item>Themes</DropdownMenu.Item>
                                <DropdownMenu.Item>GitHub</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator><span>/</span></Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator><span>/</span></Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>

        <Button variant="outline" class="px-2">
            <ArrowUpDown size={16} class="mr-2 shrink-0" />
            <Chevron size={16} class="shrink-0 text-muted-foreground" />
        </Button>
    </div>
</nav>
