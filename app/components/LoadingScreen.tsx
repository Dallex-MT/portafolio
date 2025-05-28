'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [showUFO, setShowUFO] = useState(false)
  const [showLaser, setShowLaser] = useState(false)
  const [breakScreen, setBreakScreen] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowUFO(true)
    }, 3000)

    const timer2 = setTimeout(() => {
      setBreakScreen(true)

      if (screenRef.current) {
        const pieces = Array.from(document.querySelectorAll('.loading-glass-piece'))

        gsap.to(pieces, {
          y: '+=100vh',
          x: (i) => (i % 2 === 0 ? '-=100' : '+=100'),
          rotation: (i) => (i % 2 === 0 ? -45 : 45),
          opacity: 0,
          duration: 1.5,
          ease: 'power2.in',
          stagger: 0.05,
          onComplete: () => {
            onComplete()
          }
        })
      }
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  // Generar líneas horizontales para el sol
  const sunLines = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={`sun-line-${index}`}
      className="loading-sunLine"
      style={{ bottom: `${index * (100 / 8)}%` }}
    />
  ))

  // Crear palmeras con hojas
  const createPalmTree = (key: string) => (
    <div key={key} className="loading-palm-tree">
      <div className="loading-palm-trunk" />
      <div className="loading-palm-leaves">
        {Array.from({ length: 10 }).map((_, leafIndex) => (
          <div key={`leaf-${leafIndex}`} className="loading-palm-leaf" />
        ))}
      </div>
    </div>
  )

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0 }}
        ref={screenRef}
      >
        <div className="loading-vhs-bg">
          <div className="loading-sunLines">
            {sunLines}
          </div>

          {/* Palmeras */}
          <div className="loading-palm-trees">
            {createPalmTree('palm-1')}
            {createPalmTree('palm-2')}
            {createPalmTree('palm-3')}
            {createPalmTree('palm-4')}
          </div>

          <div className="loading-scanlines" />
          <div className="loading-noise" />
        </div>

        <div className="loading-content-container">
          <div className="loading-dm-logo loading-glitch-text" data-text="DXM">DXM</div>

          {/* UFO */}
          {showUFO && (
            <motion.div
              className="absolute top-1/3 z-20"
              initial={{ x: -200, y: 50 }}
              animate={{ x: '50vw', y: 20 }}
              exit={{ x: '100vw', y: -50 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="relative">
                {/* Cuerpo del UFO */}
                <div className="w-16 h-8 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full relative">
                  {/* Luces del UFO */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 w-2 h-2 bg-cyan-400 rounded-full"
                      style={{ left: `${10 + i * 12}%` }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
                
                {/* Cúpula del UFO */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-t from-blue-400 to-cyan-200 rounded-full opacity-80" />
                
                {/* Rayo tractor */}
                <motion.div
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-cyan-400/50 to-transparent"
                  style={{
                    clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>

        {breakScreen && (
          <div className="loading-glass-overlay">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="loading-glass-piece" style={{
                clipPath: `polygon(${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%)`
              }} />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}