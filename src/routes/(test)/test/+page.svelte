<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

{#each data.users as user (user.user_id)}
    <p>{user.username}</p>
{/each}