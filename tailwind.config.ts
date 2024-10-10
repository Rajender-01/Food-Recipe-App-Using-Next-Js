import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/banner_image.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--red)",
      },
    },
  },
  plugins: [],
};
export default config;
