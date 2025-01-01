<script lang="ts" module>
    export interface YearBadgeProps {
        program: string;
    }
</script>

<script lang="ts">
    import { Badge, type BadgeVariant } from "./ui/badge/index";

    const { program }: YearBadgeProps = $props();

    const getVariant = (program: string): BadgeVariant => {
        if (/D[0-9]{2}$/.exec(program)) return "råsa";
        if (/C[0-9]{2}$/.exec(program)) return "lila";
        if (/VR\/AR[0-9]{2}$/.exec(program)) return "råsa";

        return "outline";
    };

    const variant = getVariant(program);
</script>

<Badge {variant}>{program}</Badge>
