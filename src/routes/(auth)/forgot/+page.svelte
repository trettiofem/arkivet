<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import { AtSign } from "lucide-svelte";
</script>

<!-- TODO: i18n -->
<div class="flex size-full items-center justify-center">
    <div class="flex w-full max-w-md flex-col gap-8 p-4">
        <div class="flex flex-col items-center gap-2 text-center">
            <p class="text-4xl font-semibold tracking-tight">Återställ ditt lösenord</p>
            <p class="text-muted-foreground">
                Skriv in din mejladress nedan för att återställa ditt lösenord.
            </p>
        </div>

        <div class="flex flex-col gap-2">
            <div class="relative">
                <Input class="h-10 w-full pl-9" placeholder="E-post" type="email" />
                <AtSign class="absolute left-3 top-3 size-4 text-muted-foreground" />
            </div>

            <Button class="h-10 w-full" variant="råsa">Återställ</Button>
        </div>

        <p class="text-xs text-muted-foreground">Denna delen fungerar inte!</p>
    </div>
</div>
