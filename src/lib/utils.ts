import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function range(start: number, end: number): number[] {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
}
