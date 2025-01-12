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
        BlueP: "#374c9f"
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
