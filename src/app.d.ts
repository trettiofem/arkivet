import type { AvailableLanguageTag } from "../../lib/paraglide/runtime";
import type { ParaglideLocals } from "@inlang/paraglide-sveltekit";
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
		
        interface Locals {
            paraglide: ParaglideLocals<AvailableLanguageTag>;
            supabase: SupabaseClient;
            safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
            session: Session | null;
            user: User | null;
        }

        interface PageData {
            session: Session | null;
        }

        // interface PageState {}
        // interface Platform {}
    }
}

export {};
