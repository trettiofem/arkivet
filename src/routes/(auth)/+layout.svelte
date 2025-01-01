<script lang="ts">
    import Logo from "$lib/components/logo.svelte";

    let { children } = $props();

    const quotes = [
        {
            author: "Emma Haggren",
            text: "Vi lärde oss att vi är en väldigt välfungerande sektion, och att andra lärosäten... försöker."
        },
        {
            author: "Elias Åradsson",
            text: "Man vet att man är nördig när man fyllehandlar faxmaskiner."
        },
        {
            author: "Axel Andersson",
            text: "Jag vet att det här med social cues är svårt när man går data."
        },
        {
            author: "Oskar Stenberg",
            text: "Att få M:are att använda ett verktyg som har internetuppkoppling är som att dra tänder på folk."
        },
        {
            author: "Nils Ekstrand",
            text: "Man hade kunnat servera mig på restaurang för att jag är så fucking cooked."
        },
        { author: "Ernst Padron", text: "Jag undrar om Fourier hade tyckt om Transformers?" },
        {
            author: "Yazan Al-Aswad",
            text: "Object-oriented programming är väldigt mycket object-oriented och väldigt lite programming."
        },
        { author: "Edvin Norrman", text: "Kotlin är Java utan kondom." },
        {
            author: "Filip Wilke",
            text: "Jag beställde en rom och cola och så hällde de i pepsi... Jag var så packad att jag hörde av mig till tlth.se/klaga."
        },
        { author: "Julia Karlsson", text: "D:are är lite cringe." },
        { author: "Esbjörn Stenberg", text: "Om det funkar för terrorister funkar det för D-sek." }
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<main class="grid h-dvh w-dvw grid-cols-1 lg:grid-cols-2">
    <div class="relative hidden overflow-hidden text-background dark:text-foreground lg:block">
        <img src="/dimma.webp" alt="" class="size-full object-cover" />

        <div
            class="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/50 to-50%"
        ></div>

        <div class="absolute left-0 top-0 m-8 flex flex-col gap-1">
            <Logo size="2x" />
            <p class="font-mono">D-sektionens digitala arkiv</p>
        </div>

        <div class="absolute bottom-0 right-0 m-8 max-w-lg text-end">
            <p class="text-xl">“{quote.text}”</p>
            <p>{quote.author}</p>
        </div>
    </div>

    <div class="overflow-hidden">
        {@render children()}
    </div>
</main>
