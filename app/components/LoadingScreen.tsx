'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import '../styles/loadingScreen.css'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15
        return next >= 100 ? 100 : next
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Cuando el progreso llega al 100%, activar efecto glitch y completar
    if (progress === 100) {
      setIsGlitching(true)
      setTimeout(() => {
        if (onComplete) {
          onComplete()
        }
      }, 1000) // Esperar 1 segundo para mostrar el efecto glitch
    }
  }, [progress, onComplete])


  // Generar líneas horizontales para el sol
  const sunLines = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={`sun-line-${index}`}
      className="loading-sunLine"
      style={{ bottom: `${index * (100 / 8)}%` }}
    />
  ))

  return (
    <AnimatePresence>
      <motion.div
        className={`loading-screen ${isGlitching ? 'glitching' : ''}`}
        exit={{ opacity: 0 }}
        ref={screenRef}
      >
        <div className="loading-vhs-bg">
          <div className="loading-sunLines">
            {sunLines}
          </div>

          <div className="loading-scanlines" />
          <div className="loading-noise" />
        </div>

        <div className="loading-content-container">
          <div className="loading-dm-logo">DXM</div>

          {/* Barra de progreso */}
          <div className="loading-progress-container">
            <div 
              className="loading-progress-bar"
              style={{ width: `${progress}%` }}
            />
            <div className="loading-progress-text">
              {Math.floor(progress)}%
            </div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}