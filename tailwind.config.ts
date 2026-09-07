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
        // New professional color palette
        primary: {
          DEFAULT: '#063B78', // Deep Industrial Blue
          light: '#0A4A96',
          dark: '#042A5A',
        },
        navy: {
          DEFAULT: '#0B1F33', // Dark Navy
          light: '#0F2A45',
          dark: '#071424',
        },
        accent: {
          DEFAULT: '#F4B400', // Accent Yellow
          light: '#F6C233',
          dark: '#D9A100',
        },
        // Background colors
        background: {
          DEFAULT: '#F5F7FA', // Light Background
          light: '#FFFFFF',
          dark: '#E8EDF2',
        },
        // Text colors
        text: {
          primary: '#172B4D', // Primary Text
          secondary: '#64748B', // Secondary Text
        },
        // Border colors
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
          dark: '#CBD5E1',
        },
        // Legacy colors for backward compatibility
        cement: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d20',
        },
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B8941F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
