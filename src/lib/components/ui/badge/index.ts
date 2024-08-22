import { type VariantProps, tv } from "tailwind-variants";
export { default as Badge } from "./badge.svelte";

export const badgeVariants = tv({
    base: "focus:ring-ring inline-flex select-none items-center rounded-full border px-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
            pink: "bg-pink text-pink-foreground hover:bg-pink/80 border-transparent",
            purple: "bg-purple text-purple-foreground hover:bg-purple/80 border-transparent",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export type Variant = VariantProps<typeof badgeVariants>["variant"];
