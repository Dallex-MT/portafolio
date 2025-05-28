'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: '#333' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email', color: '#EA4335' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      className="col-span-1 md:col-span-2 lg:col-span-2 neon-border rounded-xl p-6 glass-morphism relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05))',
            'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05))',
            'linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05))',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Título */}
        <motion.h2
          className="text-2xl md:text-3xl font-cyber font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Conectemos
        </motion.h2>

        {/* Redes sociales */}
        <div className="flex flex-wrap gap-4 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-600 hover:border-purple-500 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${social.color}40`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon 
                  className="w-5 h-5 transition-colors duration-300" 
                  style={{ color: social.color }}
                />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {social.label}
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Formulario de contacto */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-600 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                required
              />
            </motion.div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-600 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                required
              />
            </motion.div>
          </div>
          
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-600 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300"
              required
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}