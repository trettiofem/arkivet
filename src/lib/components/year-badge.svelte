<script lang="ts" module>
    export interface YearBadgeProps {
        program: string;
        year: number;
    }
</script>

<script lang="ts">
    import { Badge, type BadgeVariant } from "./ui/badge/index";

    const D = /D[0-9]{2}$/;
    const C = /C[0-9]{2}$/;
    const VRAR = /VR\/AR[0-9]{2}$/;
    const E = /E[0-9]{2}$/;

    const { program, year }: YearBadgeProps = $props();
    let variant: BadgeVariant = "outline"; // TODO: add "unknown" variant?

    if (program === "D") variant = "råsa";
    if (program === "C") variant = "lila";
</script>

<Badge {variant}>{program}{year}</Badge>
