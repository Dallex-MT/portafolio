'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  // Frontend
  { name: 'HTML5', logo: '/images/html5-logo.svg' },
  { name: 'CSS3', logo: '/images/css3-logo.svg' },
  { name: 'JavaScript', logo: '/images/javascript-logo.svg' },
  { name: 'TypeScript', logo: '/images/typescript-logo.svg' },
  { name: 'React', logo: '/images/react-logo.svg' },
  { name: 'Next.js', logo: '/images/next.svg' },
  { name: 'Astro', logo: '/images/astro-logo.svg' },
  // Backend
  { name: 'Node.js', logo: '/images/nodejs-logo.svg' },
  { name: 'Java', logo: '/images/java-logo.svg' },
  { name: 'PHP', logo: '/images/php-logo.svg' },
  { name: 'Python', logo: '/images/python-logo.svg' },
  // Mobile
  { name: 'Android Studio', logo: '/images/android-logo.svg' },
  { name: 'Kotlin', logo: '/images/kotlin-logo.svg' },

  // Database
  { name: 'MySQL', logo: '/images/mysql-logo.svg' },
  { name: 'MongoDB', logo: '/images/mongodb-logo.svg' },
  { name: 'Firebase', logo: '/images/firebase-logo.svg' },
  // DevOps & Tools
  { name: 'Git', logo: '/images/git-logo.svg' },
  { name: 'GitHub', logo: '/images/github-logo.svg' },
  { name: 'Nginx', logo: '/images/nginx-logo.svg' },
  { name: 'Docker', logo: '/images/docker-logo.svg' },
  { name: 'VS Code', logo: '/images/vscode-logo.svg' },
  { name: 'Postman', logo: '/images/postman-logo.svg' },
  // Design
  { name: 'Figma', logo: '/images/figma-logo.svg' },
  { name: 'Adobe XD', logo: '/images/adobe-xd-logo.svg' },
  // Additional
  { name: 'Tailwind CSS', logo: '/images/tailwind-logo.svg' },
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
            duration: 40,
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
            <div className="logoWrapper p-4">
              <img 
                src={tech.logo} 
                alt={`${tech.name} logo`} 
                className="logo w-15 h-15 md:w-19 md:h-19 transition-transform hover:scale-110"
                onError={(e) => {
                  // Fallback para logos que no existan
                  const target = e.target as HTMLImageElement;
                  target.src = '/vercel.svg';
                }}
              />
              <span className="logoName text-sm mt-2">{tech.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}