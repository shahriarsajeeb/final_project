import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Inter: ["var(--font-inter)"],
        Poppins: ["var(--font-poppins)"],
        JakartaSans: ["var(--font-plus_jakarta_sans)"],
        DmSans: ["var(--font-dm-sans)"],
      },
      backgroundImage: {
        "text-gradiant":
          "linear-gradient(96.34deg, #4B86FC 0%, #75F2F6 26.45%)",
        "button-text-gradiant":
          "linear-gradient(95.16deg, #4B86FC -75.89%, #75F2F6 155.97%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
