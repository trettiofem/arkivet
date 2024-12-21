import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                pink: {
                    DEFAULT: "rgb(var(--pink) / <alpha-value>)",
                    foreground: "rgb(var(--pink-foreground) / <alpha-value>)"
                },
                purple: {
                    DEFAULT: "rgb(var(--purple) / <alpha-value>)",
                    foreground: "rgb(var(--purple-foreground) / <alpha-value>)"
                },
                muted: {
                    DEFAULT: "rgb(var(--muted) / <alpha-value>)",
                    foreground: "rgb(var(--muted-foreground) / <alpha-value>)"
                },
                accent: "rgb(var(--accent) / <alpha-value>)",
                border: "rgb(var(--border) / <alpha-value>)",
                ring: "rgb(var(--ring) / <alpha-value>)"
            },
            borderRadius: {
                xl: "12px",
                lg: "8px",
                md: "4px"
            },
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
                mono: ["JetBrains Mono", ...fontFamily.mono]
            }
        }
    }
};

export default config;
