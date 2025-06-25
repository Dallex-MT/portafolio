/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff00ff',
          cyan: '#00ffff',
          green: '#00ff00',
          purple: '#8b00ff',
        },
        retro: {
          dark: '#0a0a0a',
          purple: '#1a0033',
          pink: '#ff0080',
          blue: '#0080ff',
        }
      },
      fontFamily: {
        'graffiti': ['Impact', 'Arial Black', 'sans-serif'],
        'cyber': ['Orbitron', 'monospace'],
        'body' : ['FantasqueSansMono', 'system-ui', 'sans-serif']
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scan': 'scan 2s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'ufo-fly': 'ufo-fly 2s ease-in-out',
        'glass-break': 'glass-break 1s ease-in-out',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-pulse': {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ufo-fly': {
          '0%': { transform: 'translateX(-200px) translateY(50px)' },
          '50%': { transform: 'translateX(50vw) translateY(20px)' },
          '100%': { transform: 'translateX(100vw) translateY(50px)' },
        },
        'glass-break': {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.1) rotate(2deg)', opacity: '0.8' },
          '100%': { transform: 'scale(0.8) rotate(5deg) translateY(100vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}