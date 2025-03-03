<script lang="ts">
    import type { ViewProps } from "./types";
    import * as m from "$lib/paraglide/messages";
    import { url } from "$lib/utils";
    import { fly } from "svelte/transition";

    const { album }: ViewProps = $props();

    // Fly transition constants
    const y = 16;
    const duration = 200;
    const delay = 25;
</script>

<!-- TODO: what if no preview? -->
<div class="flex flex-col gap-2 p-2">
    {#if album.albums.length !== 0}
        <p class="text-xs font-semibold text-muted-foreground">
            {m.explorer_image_view_albums()}
        </p>

        <div class="flex flex-row gap-2">
            {#each album.albums as nestedAlbum, i (nestedAlbum.path + "/" + nestedAlbum.name)} <!-- TODO: replace with id -->
                <a
                    href={"/" + url("archive", nestedAlbum.path, nestedAlbum.name)}
                    in:fly|global={{ y, duration, delay: i * delay }}
                >
                    <div
                        class="relative h-48 w-96 overflow-hidden rounded-xl transition-all hover:brightness-90 dark:hover:brightness-75"
                    >
                        <img src={nestedAlbum.thumbnail} class="size-full object-cover" alt="" />

                        <div
                            class="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/75 to-50%"
                        ></div>
                        <p
                            class="absolute bottom-4 left-4 text-xl font-semibold text-background dark:text-foreground"
                        >
                            {nestedAlbum.name}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if album.resources.length !== 0}
        <p class="text-xs font-semibold text-muted-foreground">
            {m.explorer_image_view_images()}
        </p>

        <div class="flex flex-row gap-2">
            {#each album.resources as resource, i (resource.path + "/" + resource.name)}
                <a href="#" in:fly|global={{ y, duration, delay: i * delay }}>
                    <div
                        class="size-32 overflow-hidden rounded-md transition-all hover:brightness-90 dark:hover:brightness-75"
                    >
                        <img src={resource.thumbnail} class="size-full object-cover" alt="" />
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</div>
