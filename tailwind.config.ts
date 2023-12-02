import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            DEFAULT: "#88F5EA",
            dark: "#5faca4",
            light: "#b8f9f2",
          },
          secondary: {
            DEFAULT: "#F5AF88",
            dark: "#c48c6d",
            light: "#f9cfb8",
          },
          surface: {
            DEFAULT: "#19363A",
            dark: "#262626",
            light: "#334244",
          },
          status: {
            error: {
              DEFAULT: "#ff0000",
              dark: "#ff0000",
              light: "#ff0000",
            },
            warning: {
              DEFAULT: "#fcba03",
              dark: "#c29313",
              light: "#ebd391",
            },
            success: {
              DEFAULT: "#95d930",
              dark: "#628a27",
              light: "#c7eb91",
            },
            disabled: {
              DEFAULT: "#969696",
              dark: "#5e5e5c",
              light: "#dedede",
            },
          },
          on: {
            primary: {
              DEFAULT: "#232323",
              dark: "#000000",
              light: "#444444",
            },
            secondary: {
              DEFAULT: "#232323",
              dark: "#000000",
              light: "#444444",
            },
            surface: {
              DEFAULT: "#dedede",
              dark: "#cdcdcd",
              light: "#ffffff",
            },
          },
        },
        dark: {
          primary: {
            DEFAULT: "#88F5EA",
            dark: "#5faca4",
            light: "#b8f9f2",
          },
          secondary: {
            DEFAULT: "#F5AF88",
            dark: "#c48c6d",
            light: "#f9cfb8",
          },
          surface: {
            DEFAULT: "#19363A",
            dark: "#262626",
            light: "#334244",
          },
          status: {
            error: {
              DEFAULT: "#ff0000",
              dark: "#ff0000",
              light: "#ff0000",
            },
            warning: {
              DEFAULT: "#fcba03",
              dark: "#c29313",
              light: "#ebd391",
            },
            success: {
              DEFAULT: "#95d930",
              dark: "#628a27",
              light: "#c7eb91",
            },
            disabled: {
              DEFAULT: "#969696",
              dark: "#5e5e5c",
              light: "#dedede",
            },
          },
          on: {
            primary: {
              DEFAULT: "#232323",
              dark: "#000000",
              light: "#444444",
            },
            secondary: {
              DEFAULT: "#232323",
              dark: "#000000",
              light: "#444444",
            },
            surface: {
              DEFAULT: "#dedede",
              dark: "#cdcdcd",
              light: "#ffffff",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
