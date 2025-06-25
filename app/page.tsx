'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ThemeToggle from './components/ThemeToggle'
import TechSlider from './components/TechSlider'
import ProjectCard from './components/ProjectCard'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ResumeSection from './components/ResumeSection'
import ProfileCard from './components/ProfileCard'
import ImageSlider from './components/ImageSlider'

const projects = [
  {
    title: "Acroware",
    description: "Es un sistema de gestión de inventarios diseñado específicamente para instituciones educativas y empresas que necesitan llevar un control detallado de sus activos.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    size: "large" as const,
    images: ["/images/projects/acroware/1.webp", "/images/projects/acroware/2.webp", "/images/projects/acroware/3.webp", "/images/projects/acroware/4.webp"],
    githubUrl: "https://github.com/Dallex-MT/GestionInventarios.git"
  },
  {
    title: "Cervecería INTI",
    description: "Es una plataforma web completa para una cervecería artesanal que permite explorar la variedad de productos de la cervecería e integra funcionalidades de e-commerce.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    size: "large" as const,
    images: ["/images/projects/inti/1.webp", "/images/projects/inti/2.webp", "/images/projects/int/3.webp", "/images/projects/inti/4.webp", "/images/projects/inti/5.webp"],
    githubUrl: "https://github.com/Dallex-MT/Inti.git"
  },
  {
    title: "UrbanStep",
    description: "Es una plataforma de comercio electrónico completa desarrollada con PHP que permite a las empresas gestionar su inventario y vender productos en línea.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    size: "large" as const,
    images: ["/images/projects/mp/1.webp", "/images/projects/mp/2.webp", "/images/projects/mp/3.webp", "/images/projects/mp/4.webp", "/images/projects/mp/5.webp"],
    githubUrl: "https://github.com/Dallex-MT/mp-p1.git"
  }
]

const TypewriterEffect = ({ messages }: { messages: string[] }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    const animateText = () => {
      const currentMessage = messages[currentMessageIndex];
      const shouldType = !isDeleting && displayText.length < currentMessage.length;
      const shouldDelete = isDeleting && displayText.length > 0;

      if (shouldType) {
        setDisplayText(currentMessage.slice(0, displayText.length + 1));
        timeout = setTimeout(animateText, 100);
      } else if (shouldDelete) {
        setDisplayText(displayText.slice(0, -1));
        timeout = setTimeout(animateText, 50);
      } else if (!isDeleting && displayText === currentMessage) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        timeout = setTimeout(animateText, 500);
      }
    };

    const toggleCursor = () => {
      setShowCursor((prev) => !prev);
    };

    timeout = setTimeout(animateText, 100);
    cursorInterval = setInterval(toggleCursor, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayText, isDeleting, currentMessageIndex, messages]);

  return <span>{displayText}<span className={showCursor ? 'blinking-cursor' : ''}>|</span></span>;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [sliderImages, setSliderImages] = useState<string[] | null>(null)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden dark:cosmic-glow">
      {/* Fondo dinámico basado en el tema */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950" />

      {/* Efectos de partículas espaciales solo en modo oscuro */}
      <div className="fixed inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() > 0.8 ? 'w-1.5 h-1.5' : Math.random() > 0.6 ? 'w-1 h-1' : 'w-0.5 h-0.5';
          const brightness = Math.random() > 0.7 ? 'bg-blue-200' : Math.random() > 0.5 ? 'bg-purple-200' : 'bg-white';
          return (
            <div
              key={i}
              className={`absolute ${size} ${brightness} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1.5 + Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.7,
              }}
            />
          );
        })}
      </div>
      {/* Fondo con grid cyberpunk */}
      <div className="fixed inset-0 cyber-grid opacity-20 dark:opacity-10" />

      {/* Pantalla de carga */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Toggle de tema */}
      {!isLoading && <ThemeToggle />}

      {/* Contenido principal */}
      {showContent && (
        <motion.div
          className="relative z-10 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header con slider de tecnologías */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <motion.h1
                className="neonderthaw-title"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Portafolio DXM
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {showContent && (
                  <TypewriterEffect
                    messages={[
                      "Experiencias web que trascienden lo convencional",
                      "Diseño y desarrollo de experiencias digitales únicas",
                      "Creando el futuro de la web, hoy",
                      "Innovación y creatividad en cada proyecto",
                      "Transformando ideas en experiencias interactivas"
                    ]}
                  />
                )}
              </motion.p>
            </div>

            <div className='flex justify-center mb-8'>
              <ProfileCard
                name="Dallin Miranda Tustón"
                title="Software Engineer"
                handle="DXM"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/images/me.webp"
                showUserInfo={false}
                enableTilt={true}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>

            <TechSlider />
          </motion.section>

          {/* Layout Bento */}
          <motion.section
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Primera fila: About y CV */}
              <div className="md:col-span-3">
                <AboutSection />
              </div>
              <div className="md:col-span-1">
                <ResumeSection />
              </div>

              {/* Proyectos en filas de 3 */}
              <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <ProjectCard
                      {...project}
                      onImageClick={(images) => setSliderImages(images)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Sección de contacto */}
              <div className="col-span-full">
                <ContactSection />
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              />

              <motion.p
                className="text-gray-400 text-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                2025 DXM Portfolio. Diseñado con y mucho café.
              </motion.p>
            </div>
          </motion.footer>
        </motion.div>
      )}

      {/* Partículas de fondo */}
      {showContent && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      )}

      {/* Render the ImageSlider at the top level when active */}
      {sliderImages && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center">
          <ImageSlider
            images={sliderImages}
            onClose={() => setSliderImages(null)}
          />
        </div>
      )}
    </main>
  )
}