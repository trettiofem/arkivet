import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { languageTag } from "./paraglide/runtime";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function range(start: number, end: number): number[] {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
}

export function url(...paths: string[]): string {
    const full = [];

    for (const path of paths) {
        full.push(...path.split("/").filter((p) => p !== ""));
    }

    return full.join("/");
}

export function parameters(...params: { name: string; value: string | number | boolean }[]): string {
    const full = [];

    for (const param of params) {
        full.push(encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value));
    }

    return "?" + full.join("&");
}

export function formatFileSize(size: number): string {
    const units = ["B", "kB", "MB", "GB", "TB"];
    let i;

    for (i = 0; i < units.length - 1; i++) {
        if (size > 1024) size /= 1024;
        else break;
    }

    return `${size.toLocaleString(languageTag())} ${units[i]}`;
}
