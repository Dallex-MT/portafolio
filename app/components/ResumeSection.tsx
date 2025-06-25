'use client'

import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'

export default function ResumeSection() {
  return (
    <motion.div
      className="neon-border rounded-xl p-4 glass-morphism h-full group hover:bg-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-center items-center h-full"
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 40px rgba(255, 0, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fondo con gradiente animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 text-center">
        <h3 className="text-xl playball-title font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Mi CV
        </h3>
        <p className="text-gray-300 mb-4 text-xs text-center">
          Explora mi trayectoria
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1lWmS0Ba-5L6BZUVKfg0z1gUv0DR33PRM/view?usp=sharing"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileDown className="w-5 h-5" />
          Descargar CV
        </motion.a>
      </div>

      {/* Efecto de partículas en hover */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}