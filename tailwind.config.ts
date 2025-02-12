import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodytext: "var(--bodytext)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        fontcolor: "var(--font-color)",
        cardbg: "var(--card-bg)",
        cardbg2: "var(--card-bg2)",
        fontsecondary: "var(--font-secondary-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
