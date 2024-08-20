/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "pink": {
        "50": "#fef2f5",
        "100": "#fde6eb",
        "200": "#fbd0dc",
        "300": "#f7aabf",
        "400": "#f280a1", /* <- */
        "500": "#e74c7c",
        "600": "#d32b68",
        "700": "#b21e57",
        "800": "#951c4e",
        "900": "#801b49",
        "950": "#470a24"
      },
      "purple": {
        "50": "#faf7fd",
        "100": "#f3ecfb",
        "200": "#e8ddf7",
        "300": "#d7c2f0",
        "400": "#be9be5",
        "500": "#a574d8",
        "600": "#9966cc", /* <- */
        "700": "#7943ad",
        "800": "#663b8e",
        "900": "#533172",
        "950": "#381952"
      }
    }
  },
  plugins: [],
}

