/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      background: {
        "marquee-left":
          "linear-gradient(to left, rgba(255, 255, 255, 0), white)",
        "marquee-right":
          "linear-gradient(to right, rgba(255, 255, 255, 0), white)",
      },
      keyframes: {
        "gradient-animation": {
          "0%, 100%": { background: "background-position: 0% 50%" },
          "50%": { background: "background-position: 100% 50%;" },
        },
        rotate: {
          "0%, 100%": { transform: "rotate(32deg)" },
          "50%": { transform: "rotate(-12deg)" },
        },
        ia: {
          "0%, 100%": { transform: "translateX(12%)" },
          "50%": { transform: "translateX(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "gradient-animation": "gradient-animation 1s ease-in-out infinite",
        ia: "ia 1s ease-in-out infinite",
        rotate: "rotate 1s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        400: "0.4s",
        200: "0.2s",
      },
      colors: {
        light: "#e9f1ff",
        "light-hover": "#deeaff",
        "light-active": "#bad5ff",
        normal: "#2176ff",
        "normal-hover": "#1e6ae6",
        "normal-active": "#1a5ecc",
        dark: "#1959bf",
        "dark-hover": "#144799",
        "dark-active": "#0f3573",
        darker: "#0c2959",
        "black-gray": "#191919",
        gray: "#565656",
        "card-bg": "#202020",
        "card-bg-hover": "#262626",
        "social-btn-bg": "#363636",
        "header-bg": "rgba(25, 25, 25, 0.60)",
        "header-border-bottom": "rgba(155, 155, 155, 0.10)",
        "gradient-first": "#692dcc",
        "gradient-second": "#ed178e",
        //////////////////////////// shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      linearGradientColors: {
        custom: ["#692dcc", "#ed178e"],
      },
      boxShadow: {
        projectCard: "0px 8px 18px 0px rgba(25, 25, 25, 0.25)",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
