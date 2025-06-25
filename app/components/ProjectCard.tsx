'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  images?: string[]
  demoUrl?: string
  githubUrl?: string
  size?: 'small' | 'medium' | 'large'
  onImageClick?: (images: string[]) => void
}

export default function ProjectCard({
  title,
  description,
  technologies,
  images,
  demoUrl,
  githubUrl,
  size = 'medium',
  onImageClick
}: ProjectCardProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} neon-border rounded-xl p-6 glass-morphism group hover:bg-white/20 transition-all duration-300 relative overflow-hidden`}
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

      <div className="relative z-10 h-full flex flex-col">
        {/* Imagen del proyecto */}
        {images && images.length > 0 && (
          <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 to-cyan-900 flex items-center justify-center">
            <img 
              src={images[0]} 
              alt={title} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => onImageClick && onImageClick(images)}
            />
          </div>
        )}

        {/* Título */}
        <h3 className="text-xl playball-title font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 flex-grow text-sm leading-relaxed">
          {description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              GitHub
            </motion.a>
          )}

          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}