/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        customAnimation: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        custom: 'customAnimation 1s ease-in-out',
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #051960 0%, #591DA9 90%)",
        "radial-custom-gradient": "radial-gradient(circle at top left, #007AFF 0%, #8566FF 25%, #1D8BA9 50%, #8566FF 75%)",
        "glass": 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '20px', 
      },
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        primary: ["Prompt", "sans-serif"],
        roman: ["Cormorant Garamond", "serif"],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        luxuriousRoman: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'bottom-white': '0 4px 6px 0 rgba(255, 255, 255, 0.5)',
        'custom-top': '20px 20px 0 0', 
      },
      boxShadow: {
        'custom-grey-inner': 'inset 2px 0px 2px 2px rgba(156, 163, 175, 0.5)',
      },
      colors: {
        main: "#8566FF",
        main2: "#591DA9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#cec2ff",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
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
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('tailwindcss/plugin'),
    require("tailwindcss-animate")
  ],
};
