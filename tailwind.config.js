/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      screens: {
        xs: "320px",
      },
      background: {
        "marquee-left":
          "linear-gradient(to left, rgba(255, 255, 255, 0), white)",
        "marquee-right":
          "linear-gradient(to right, rgba(255, 255, 255, 0), white)",
      },
      keyframes: {
        rotate: {
          "0%, 100%": {
            transform: "rotate(32deg)",
          },
          "50%": {
            transform: "rotate(-12deg)",
          },
        },
        ia: {
          "0%, 100%": {
            transform: "translateX(12%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
        },
        upanddown: {
          "0%, 100%": {
            transform: "translateY(-10%)",
          },
          "50%": {
            transform: "translateY(10%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        ia: "ia 1s ease-in-out infinite",
        upanddown: "upanddown 1s ease-in-out infinite",
        rotate: "rotate 1s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        200: "0.2s",
        400: "0.4s",
      },
      colors: {
        black: {
          light: "#292929",
          dark: "#191919",
          darker: "#0e0e0e",
        },
        gray: {
          light: "#575757",
          dark: "#9c9c9c",
        },
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
