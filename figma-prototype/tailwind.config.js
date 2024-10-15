/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBrown: '#322D29',  // Header, footer, and navigation backgrounds
          deepRed: '#73283D',    // Action buttons and hover effects
        },
        secondary: {
          mutedBeige: '#AC9C8D', // Secondary buttons, card backgrounds
          softSand: '#D1C7BD',   // Product cards and subtle shadows
        },
        neutral: {
          lightGrey: '#D9D9D9',  // Page backgrounds and form inputs
          offWhite: '#EFE9E1',   // Section dividers and modal backgrounds
        },
        text: {
          dark: '#322D29',       // Primary text color
          light: '#73283D',      // Light text on lighter backgrounds
        },
        hover: {
          accent: '#5F2233',     // Hover state for links and buttons
          buttonBg: '#AC9C8D',   // Button hover background
        }
      }
    }
  },
  plugins: []
}

