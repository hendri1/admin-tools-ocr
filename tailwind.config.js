module.exports = {
  prefix: "tw-",
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  darkMode: false,
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    colors: {
      black: "#14142A",
      gray: "#EEEEEE",
      "dark-gray": "#8A95A8",
      "light-gray": "#F3F5F9",
      primary: "#3A79BD",
      secondary: "#005288",
      tertiary: "#0E2A47",
      success: "#00BA88",
      "success-focus": "rgba(0, 186, 136, 0.7)",
      "success-hover": "rgba(0, 186, 136, 0.7)",
      warning: "#FEC222",
      "warning-focus": "rgba(254, 194, 34, 0.7)",
      "warning-hover": "rgba(254, 194, 34, 0.7)",
      error: "#E83D66",
      "error-focus": "rgba(237, 46, 126, 0.7)",
      "error-hover": "rgba(237, 46, 126, 0.7)",
    },
    fontSize: {
      "heading-large": [
        "4rem",
        {
          lineHeight: "3.75rem",
          letterSpacing: "1px",
          fontWeight: "500",
        },
      ],
      "heading-medium": [
        "2.25rem",
        {
          lineHeight: "3rem",
          letterSpacing: "1px",
          fontWeight: "500",
        },
      ],
      "heading-small": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "1px",
          fontWeight: "500",
        },
      ],
      "text-large": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.5px",
          fontWeight: "400",
        },
      ],
      "text-medium": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.5px",
          fontWeight: "400",
        },
      ],
      "text-small": [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.5px",
          fontWeight: "400",
        },
      ],
      caption: [
        "0.75rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.1px",
          fontWeight: "400",
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
