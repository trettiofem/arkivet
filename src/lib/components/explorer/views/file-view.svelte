<script lang="ts">
    import type { ViewProps } from "./types";
    import * as Table from "$lib/components/ui/table/index.js";
    import { cn, formatFileSize, parameters, url } from "$lib/utils";
    import { languageTag } from "$lib/paraglide/runtime";
    import * as m from "$lib/paraglide/messages";
    import {
        Folder,
        FileText,
        FileArchive,
        FileImage,
        FileAudio,
        FileCode,
        FileJson,
        FileVideo,
        FileSpreadsheet,
        FileQuestion
    } from "lucide-svelte";

    const { album }: ViewProps = $props();

    // TODO: locale
    const fileCategories = [
        {
            pattern: ["txt", "doc", "docx", "pdf", "odt", "rtf", "md"],
            icon: FileText,
            color: "text-indigo-500",
            type: m.explorer_file_view_category_document()
        },
        {
            pattern: ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "iso", "tgz"],
            icon: FileArchive,
            color: "text-amber-500",
            type: m.explorer_file_view_category_archive()
        },
        {
            pattern: ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "svg", "ico", "heic"],
            icon: FileImage,
            color: "text-teal-500",
            type: m.explorer_file_view_category_image()
        },
        {
            pattern: ["mp3", "wav", "aac", "flac", "ogg", "m4a", "wma", "alac", "aiff", "opus"],
            icon: FileAudio,
            color: "text-orange-500",
            type: m.explorer_file_view_category_audio()
        },
        {
            pattern: [
                "c",
                "cpp",
                "cs",
                "java",
                "py",
                "js",
                "ts",
                "rb",
                "php",
                "html",
                "css",
                "xml",
                "go",
                "rs",
                "swift",
                "kt",
                "sh",
                "pl",
                "lua"
            ],
            icon: FileCode,
            color: "text-råsa-foreground",
            type: m.explorer_file_view_category_source_code()
        },
        {
            pattern: ["json"],
            icon: FileJson,
            color: "text-lime-500",
            type: m.explorer_file_view_category_json()
        },
        {
            pattern: ["mp4", "avi", "mkv", "mov", "wmv", "flv", "webm", "mpeg", "3gp", "m4v"],
            icon: FileVideo,
            color: "text-red-500",
            type: m.explorer_file_view_category_video()
        },
        {
            pattern: ["xls", "xlsx", "ods", "csv", "tsv"],
            icon: FileSpreadsheet,
            color: "text-emerald-500",
            type: m.explorer_file_view_category_spreadsheet()
        }
    ];

    const getFileCategory = (name: string) => {
        if (name.includes(".")) {
            const ext = name.split(".").at(-1)!.toLowerCase();

            for (const cat of fileCategories) {
                if (cat.pattern.includes(ext)) {
                    return { icon: cat.icon, color: cat.color, type: cat.type };
                }
            }
        }

        return {
            icon: FileQuestion,
            color: "text-slate-500",
            type: m.explorer_file_view_category_unknown()
        };
    };
</script>

{#snippet item(
    name: string,
    href: string,
    updated: Date,
    size: number,
    Icon: typeof Folder,
    color: string,
    type: string
)}
    <Table.Row>
        <Table.Cell class="flex flex-row items-center gap-2">
            <Icon class={cn("size-4", color)} />
            <a {href} class="font-mono hover:underline">{name}</a>
        </Table.Cell>
        <Table.Cell>{updated.toLocaleString(languageTag())}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell class="font-mono">
            {size === -1 ? "" : formatFileSize(size)}
        </Table.Cell>
    </Table.Row>
{/snippet}

<Table.Root>
    <Table.Header>
        <Table.Row class="hover:bg-transparent">
            <Table.Head>{ m.explorer_file_view_header_name() }</Table.Head>
            <Table.Head>{ m.explorer_file_view_header_updated() }</Table.Head>
            <Table.Head>{ m.explorer_file_view_header_type() }</Table.Head>
            <Table.Head>{ m.explorer_file_view_header_size() }</Table.Head>
        </Table.Row>
    </Table.Header>
    <Table.Body class="[&_tr:last-child]:border-b">
        {#each album.albums as nestedAlbum (nestedAlbum.name)}
            {@render item(
                nestedAlbum.name + "/",
                "/" + url("archive", nestedAlbum.path, nestedAlbum.name),
                nestedAlbum.updated,
                -1,
                Folder,
                "text-lila-foreground",
                m.explorer_file_view_category_album()
            )}
        {/each}

        {#each album.resources as resource (resource.name)}
            {@const category = getFileCategory(resource.name)}
            {@render item(
                resource.name,
                parameters({ name: "view", value: resource.name }),
                resource.updated,
                resource.size,
                category.icon,
                category.color,
                category.type
            )}
        {/each}
    </Table.Body>
</Table.Root>
