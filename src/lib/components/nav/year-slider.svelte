<script lang="ts" module>
    const FIRST_YEAR = 1983;
    const LAST_YEAR = new Date().getFullYear();

    export interface YearSelectorProps {
        path: string;
        name: string;
        cognates: number[];
    }
</script>

<script lang="ts">
    import Button from "../ui/button/button.svelte";
    import { ArrowLeft, ArrowRight } from "lucide-svelte";
    import * as Carousel from "$lib/components/ui/carousel/index";
    import { type CarouselAPI } from "$lib/components/ui/carousel/context";
    import { cn, range, url } from "$lib/utils";

    const { path, name, cognates }: YearSelectorProps = $props();
    let api = $state<CarouselAPI>();

    const years = range(FIRST_YEAR, LAST_YEAR);

    const currentYear = $derived.by(() => {
        let year;
        if (path === "") year = parseInt(name);
        else year = parseInt(path.split("/")[0]);

        if (isNaN(year)) return 0;
        return year;
    });

    $effect(() => {
        if (api && currentYear >= FIRST_YEAR && currentYear <= LAST_YEAR) {
            const index = currentYear - FIRST_YEAR;
            if (api.slidesNotInView().includes(index)) {
                api.scrollTo(index);
            }
        }
    });

    const getHrefWithSwappedYear = (year: number) => {
        if (path === "") return "/" + url("archive", year.toString());
        else return "/" + url("archive", year.toString(), ...path.split("/").slice(1), name);
    };
</script>

<div class="flex flex-row gap-1 overflow-hidden rounded-md border">
    <!-- TODO: back and forward buttons -->
    <Button variant="ghost" size="icon" class="rounded-none"><ArrowLeft /></Button>

    <Carousel.Root class="w-1 flex-1" opts={{ dragFree: true }} setApi={(embla) => (api = embla)}>
        <Carousel.Content class="-ml-1">
            {#each years as year}
                <Carousel.Item class="basis-[20%] pl-1 lg:basis-[10%] 2xl:basis-[5%]">
                    <a
                        href={getHrefWithSwappedYear(year)}
                        class={cn(
                            "flex h-10 w-full items-center justify-center text-sm transition-colors hover:text-foreground",
                            year === currentYear
                                ? "font-semibold"
                                : cognates.includes(year)
                                  ? "text-muted-foreground"
                                  : "text-border"
                        )}
                    >
                        <span
                            class={year === currentYear
                                ? "rounded-full border border-råsa-border bg-råsa px-2 text-råsa-foreground transition-colors hover:bg-råsa-accent"
                                : ""}
                        >
                            {year}
                        </span>
                    </a>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
    </Carousel.Root>

    <Button variant="ghost" size="icon" class="rounded-none"><ArrowRight /></Button>
</div>
