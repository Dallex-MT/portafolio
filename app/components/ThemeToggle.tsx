'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition-all duration-300"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: theme === 'light' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-purple-400" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-400" />
        )}
      </motion.div>
      
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 0, 255, 0.3)',
            '0 0 30px rgba(0, 255, 255, 0.3)',
            '0 0 20px rgba(255, 0, 255, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  )
}