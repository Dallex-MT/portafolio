'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Rocket } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    { icon: Code, name: 'Frontend Development', level: 95 },
    { icon: Zap, name: 'UI/UX Design', level: 88 },
    { icon: Rocket, name: 'Performance Optimization', level: 92 },
  ]

  return (
    <motion.div
      className="col-span-1 md:col-span-2 lg:col-span-3 neon-border rounded-xl p-8 glass-morphism relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))',
            'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))',
            'linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Avatar y título */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-4xl font-bold text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.5)',
                '0 0 30px rgba(6, 182, 212, 0.5)',
                '0 0 20px rgba(147, 51, 234, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            DXM
          </motion.div>
          
          <div className="text-center md:text-left">
            <motion.h2
              className="text-3xl md:text-4xl font-cyber font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Desarrollador Frontend
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Especialista en React, Next.js y experiencias digitales innovadoras
            </motion.p>
          </div>
        </div>

        {/* Descripción */}
        <motion.p
          className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Soy un desarrollador frontend apasionado por crear experiencias web únicas y memorables. 
          Me especializo en tecnologías modernas como React, Next.js y TypeScript, combinando 
          funcionalidad robusta con diseños visuales impactantes. Mi enfoque se centra en la 
          performance, accesibilidad y la creación de interfaces que no solo funcionen perfectamente, 
          sino que también cuenten una historia.
        </motion.p>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-purple-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mb-3 p-3 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="font-cyber font-semibold text-center mb-2 text-purple-300">
                  {skill.name}
                </h3>
                
                {/* Barra de progreso */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                  />
                </div>
                
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}