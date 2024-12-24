/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",        // A soft green to represent health and well-being (primary brand color)
        secondary: "#1976D2",      // A calming blue for secondary elements like buttons or links
        accent: "#FF9800",         // A warm accent color for highlighting important elements (calls to action)
        background: "#FAFAFA",     // Light grey background for the main content area (soft on eyes)
        text: "#333333",           // Dark grey text for readability
        onHover: "#0288D1",        // A darker blue for hover states to create contrast
      
        darkPrimary: "#81C784",    // Lighter green for dark mode (providing softer contrast while maintaining brand consistency)
        darkSecondary: "#90CAF9",  // Light blue for dark mode (calming, easy on eyes)
        darkAccent: "#FFB74D",     // A softer warm accent in dark mode
        darkBackground: "#121212", // Very dark background for dark mode (reduces eye strain in low-light environments)
        darkText: "#E0E0E0",       // Light text color for dark mode (provides high contrast for readability)
        darkOnHover: "#FF8C00",    // Bright accent color on hover in dark mode (for focus)
      }
      ,
      fontSize: {
        'cXS': '.75rem',
        'cSM': '.875rem',
        'cMD': '1rem',
        'cLG': '1.125rem',
        'cXL': '1.25rem',
        'c2XL': '1.5rem',
        'c3XL': '1.875rem',
        'c4XL': '2.25rem',
        'C5XL': '3rem',
      },
      keyframes: {
        
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        
        slideIn: 'slideIn 0.8s ease-in-out',
        slideOut: 'slideOut 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
};
