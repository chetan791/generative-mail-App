/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#282c34",
        chat: "#282c34",
        foreground: "#E2E8F0",
        primary: {
          DEFAULT: "#8e54b7",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
        },
        accent: {
          DEFAULT: "#10B981",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        card: {
          DEFAULT: "#1E293B",
          foreground: "#E2E8F0",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
