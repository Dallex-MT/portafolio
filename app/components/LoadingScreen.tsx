'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

const UFO_WIDTH = 64; // Corresponds to w-16
const UFO_HEIGHT = 32; // Corresponds to h-8 (main body)

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const ufoRef = useRef<HTMLDivElement>(null)
  const [showUFO, setShowUFO] = useState(false)
  const [initiateShatter, setInitiateShatter] = useState(false)
  const [fragments, setFragments] = useState<JSX.Element[]>([])

  useEffect(() => {
    // Show UFO after a short delay
    const ufoAppearTimer = setTimeout(() => {
      setShowUFO(true)
    }, 500) // UFO appears sooner

    return () => {
      clearTimeout(ufoAppearTimer)
    }
  }, [])

  const handleUFOAnimationComplete = () => {
    // UFO has reached the center, trigger shatter
    setInitiateShatter(true)
  }

  useEffect(() => {
    if (initiateShatter && screenRef.current) {
      // Hide original content that should not be part of fragments
      const ufoElement = ufoRef.current;
      const logoElement = screenRef.current.querySelector('.loading-dm-logo');
      if (ufoElement) ufoElement.style.display = 'none';
      if (logoElement) (logoElement as HTMLElement).style.display = 'none';

      const screenRect = screenRef.current.getBoundingClientRect()
      const numFragments = 75; // Number of fragments
      const fragmentSize = Math.sqrt((screenRect.width * screenRect.height) / numFragments) / 2;
      const newFragments: JSX.Element[] = []
      const fragmentElements: HTMLDivElement[] = []

      for (let i = 0; i < numFragments; i++) {
        const x = Math.random() * screenRect.width;
        const y = Math.random() * screenRect.height;
        const id = `fragment-${i}`;
        
        // Create div element to be animated by GSAP
        const fragDiv = document.createElement('div');
        fragDiv.id = id;
        fragDiv.className = 'loading-fragment'; // Add a class for potential base styling
        fragDiv.style.position = 'absolute';
        fragDiv.style.left = `${x - fragmentSize / 2}px`;
        fragDiv.style.top = `${y - fragmentSize / 2}px`;
        fragDiv.style.width = `${fragmentSize + Math.random() * fragmentSize}px`;
        fragDiv.style.height = `${fragmentSize + Math.random() * fragmentSize}px`;
        // Inherit background from .loading-vhs-bg by not setting one, or set parts of it
        // For simplicity, let's give them a color that fits the theme or make them transparent to show bg
        // To make them appear as part of the screen, they should ideally sample the background
        // A simpler approach: make them dark, or use a repeating gradient similar to the screen
        fragDiv.style.background = `hsl(${Math.random() * 50 + 260}, 100%, ${10 + Math.random() * 15}%)`; // Dark purples/blues
        fragDiv.style.opacity = '1';
        screenRef.current?.appendChild(fragDiv);
        fragmentElements.push(fragDiv);
      }

      // Animate fragments with GSAP
      gsap.to(fragmentElements, {
        x: () => `+=${(Math.random() - 0.5) * (window.innerWidth * 0.3)}`,
        y: () => `+=${window.innerHeight * 0.8 + Math.random() * (window.innerHeight * 0.5)}`,
        rotation: () => (Math.random() - 0.5) * 720,
        opacity: 0,
        duration: 1.5 + Math.random() * 1.5,
        ease: 'power2.in',
        stagger: {
          each: 0.005,
          from: "center" // fragments near center start first
        },
        onComplete: () => {
          // Cleanup: remove fragment divs from DOM
          fragmentElements.forEach(frag => frag.remove());
          if (onComplete) {
            onComplete()
          }
        }
      })
    }
  }, [initiateShatter, onComplete])


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
        className="loading-screen"
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
          <div className="loading-dm-logo loading-glitch-text" data-text="DXM">DXM</div>

          {/* UFO - Will be controlled by initiateShatter to hide before fragments appear */}
          {/* The UFO itself is hidden by direct DOM manipulation before fragments are created */} 
          {showUFO && !initiateShatter && (
            <motion.div
              ref={ufoRef} // Add ref to UFO for direct manipulation
              className="absolute z-20" // Positioning will be handled by initial/animate
              initial={{ x: '-100vw', y: `calc(50vh - ${UFO_HEIGHT / 2}px)` }} // Start off-screen left, vertically centered
              animate={{
                x: `calc(50vw - ${UFO_WIDTH / 2}px)`, // Target center screen X
                y: `calc(50vh - ${UFO_HEIGHT / 2}px)`  // Target center screen Y
              }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} // Slightly faster, custom ease for impact feel
              onAnimationComplete={handleUFOAnimationComplete} // Trigger shatter on arrival
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
        {/* Fragments will be appended here by GSAP directly into screenRef if initiateShatter is true */}
      </motion.div>
    </AnimatePresence>
  )
}