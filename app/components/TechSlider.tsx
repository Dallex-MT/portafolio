'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Next.js', logo: '/images/next.svg' },
  { name: 'React', logo: '/images/react-logo.svg' },
  { name: 'Tailwind CSS', logo: '/images/tailwind-logo.svg' },
  { name: 'TypeScript', logo: '/images/typescript-logo.svg' },
  { name: 'Framer Motion', logo: '/images/framer-logo.svg' },
  { name: 'GSAP', logo: '/images/gsap-logo.svg' },
  { name: 'Three.js', logo: '/images/threejs-logo.svg' },
];

export default function TechSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sliderContainer">
      <motion.div 
        className="sliderTrack"
        ref={sliderRef}
        animate={{ 
          x: ["-0%", "-50%"]
        }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {/* Triplicamos los logos para asegurar un loop continuo */}
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="logoItem"
          >
            <div className="logoWrapper">
              <img 
                src={tech.logo} 
                alt={`${tech.name} logo`} 
                className="logo"
                onError={(e) => {
                  // Fallback para logos que no existan
                  const target = e.target as HTMLImageElement;
                  target.src = '/vercel.svg';
                }}
              />
              <span className="logoName">{tech.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}