'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'Next.js', color: '#000000' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Framer Motion', color: '#FF0055' },
  { name: 'Node.js', color: '#339933' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'CSS3', color: '#1572B6' },
]

export default function TechSlider() {
  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex space-x-8 transform -rotate-3"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicamos el array para crear un loop infinito */}
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 px-6 py-3 rounded-lg neon-border bg-black/20 backdrop-blur-md"
            whileHover={{ 
              scale: 1.1, 
              rotate: 3,
              boxShadow: `0 0 30px ${tech.color}40`,
            }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="font-cyber font-bold text-lg whitespace-nowrap"
              style={{ 
                color: tech.color,
                textShadow: `0 0 10px ${tech.color}`,
              }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}