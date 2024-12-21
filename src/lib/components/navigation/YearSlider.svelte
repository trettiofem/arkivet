<script lang="ts">
    import { Slider } from "bits-ui";

    const MIN_YEAR = 1983;
    const MAX_YEAR = new Date().getFullYear();
    const DELAY = 500;

    let { value = [MAX_YEAR] }: { value?: number[] } = $props();
    let timer: number | undefined;

    function onValue() {
        console.log(value[0]);
    }

    function onValueChange() {
        if (timer) {
            clearTimeout(timer);
        } 

        timer = setTimeout(onValue, DELAY);
    }
</script>

<div class="flex flex-row items-start gap-2 grow">
    <p class="text-xs text-muted-foreground">{MIN_YEAR}</p>
    <div class="w-full rounded-full border border-input px-2">
        <Slider.Root {onValueChange} bind:value min={MIN_YEAR} max={MAX_YEAR} step={1} class="relative flex w-full touch-none select-none items-center" let:thumbs let:ticks>
            <span class="h-4 w-full"></span>

            {#each ticks as tick}
                <Slider.Tick {tick} class="block size-1 rounded-full bg-secondary-foreground" />
            {/each}

            {#each thumbs as thumb}
                <Slider.Thumb {thumb} asChild let:builder>
                    <div
                        use:builder.action
                        {...builder}
                        class="relative size-2 rounded-full bg-purple ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                        <div class="absolute -top-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
                            <div class="flex-col items-center rounded-full bg-purple px-2 py-1">
                                <p class="text-xs font-semibold text-purple-foreground">{value}</p>
                            </div>
                            <svg class="text-purple" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H12L7.41421 4.58579C6.63317 5.36683 5.36683 5.36683 4.58579 4.58579L0 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </Slider.Thumb>
            {/each}
        </Slider.Root>
    </div>

    <p class="text-xs text-muted-foreground">{MAX_YEAR}</p>
</div>
