import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
    const username = params.path;

    const res = await fetch(`/api/user/${username}`);
    const user = await res.json();

    return user;
};

