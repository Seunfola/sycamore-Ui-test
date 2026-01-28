import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Rethink Sans", "sans-serif"],
        serif: ["Allan", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
} satisfies Config;
