import { createClient } from "@supabase/supabase-js";

function getSupabaseClient() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;

    if (url === undefined || key === undefined) {
        throw new Error("Supabase URL/key not defined or found. Are environment variables set?");
    }

    return createClient(url, key);
}

export default getSupabaseClient();