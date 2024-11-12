'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { ChevronRight, ChevronLeft, Code, Users, Calendar } from 'lucide-react'
import Particles from '@/components/ui/particles'
import { BorderBeam } from '@/components/ui/border-beam'

const projects = [
  {
    id: 'CYB-2077-X',
    title: 'NEO-TOKYO',
    image: '/placeholder.svg?height=200&width=400',
    description: 'Una metrópolis futurista donde la realidad virtual y la conciencia humana se fusionan en un laberinto de neón y datos.',
    tech: 'IA Neuronal, Realidad Aumentada',
    team: '5 Netrunners, 3 Tecno-chamanes',
    deadline: '31.12.2077'
  },
  {
    id: 'CYB-2078-Y',
    title: 'CYBER NEXUS',
    image: '/placeholder.svg?height=200&width=400',
    description: 'Un hub de datos cuánticos que conecta mentes humanas en una red neuronal colectiva.',
    tech: 'Computación Cuántica, Interfaz Neural',
    team: '7 Hackers Cuánticos, 2 Neuromantes',
    deadline: '15.06.2078'
  },
  {
    id: 'CYB-2079-Z',
    title: 'NEON PULSE',
    image: '/placeholder.svg?height=200&width=400',
    description: 'Sistema de energía basado en pulsos de luz neón que alimenta toda la ciudad con emisiones cero.',
    tech: 'Fusión Fría, Fotónica Avanzada',
    team: '4 Ingenieros de Luz, 6 Tecno-ecologistas',
    deadline: '22.09.2079'
  },
  {
    id: 'CYB-2080-W',
    title: 'SYNTH CITY',
    image: '/placeholder.svg?height=200&width=400',
    description: 'Una urbe donde los límites entre humanos y androides se desvanecen en un mar de implantes y conciencias sintéticas.',
    tech: 'Bioingeniería Avanzada, IA Emocional',
    team: '6 Ingenieros Genéticos, 4 Psicólogos de IA',
    deadline: '01.03.2080'
  },
  {
    id: 'CYB-2081-V',
    title: 'DIGITAL DREAMSCAPE',
    image: '/placeholder.svg?height=200&width=400',
    description: 'Plataforma de realidad virtual que permite a los usuarios vivir sus sueños en un mundo digital compartido.',
    tech: 'Neurociencia Digital, Realidad Onírica',
    team: '3 Arquitectos de Sueños, 5 Neurocientíficos Digitales',
    deadline: '17.11.2081'
  }
]

function ProjectCard({ project, offset }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    if (offset === 0) {
      const glitchInterval = setInterval(() => {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 200)
      }, Math.random() * 5000 + 2000)

      return () => clearInterval(glitchInterval)
    }
  }, [offset])

  const variants = {
    center: { x: 0, scale: 1, opacity: 1 },
    left: { x: '-75%', scale: 0.85, opacity: 0.7 },
    right: { x: '75%', scale: 0.85, opacity: 0.7 },
    farLeft: { x: '-150%', scale: 0.7, opacity: 0.5 },
    farRight: { x: '150%', scale: 0.7, opacity: 0.5 },
  }

  const getVariant = (offset) => {
    if (offset === 0) return 'center'
    if (offset === 1 || offset === -4) return 'right'
    if (offset === -1 || offset === 4) return 'left'
    if (offset === 2 || offset === -3) return 'farRight'
    if (offset === -2 || offset === 3) return 'farLeft'
    return 'center'
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 right-0 mx-auto w-full max-w-md ${
        offset === 0 ? 'z-20' : offset === -1 || offset === 1 ? 'z-10' : 'z-0'
      }`}
      variants={variants}
      initial="center"
      animate={getVariant(offset)}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-none bg-black/40 backdrop-blur-sm relative overflow-hidden">
        <BorderBeam />
        <CardContent className="flex flex-col p-6 relative z-10">
          <div className="mb-4 relative overflow-hidden rounded-md">
            <img 
              src={project.image}
              alt={`Proyecto ${project.title}`} 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <motion.div 
              className="absolute inset-0 bg-blue-400 mix-blend-overlay opacity-0"
              animate={{ opacity: glitch ? 0.5 : 0 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </div>

          <div className="mb-4">
            <motion.h2 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ x: glitch ? [-2, 2, -2, 0] : 0 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h2>
            <Badge variant="outline" className="mt-2 bg-blue-500/10 border-blue-500/20 text-blue-400">
              ID: {project.id}
            </Badge>
          </div>

          <p className="text-gray-400 mb-4">{project.description}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-blue-400">
              <Code size={16} className="mr-2" />
              <span>Tecnología: {project.tech}</span>
            </div>
            <div className="flex items-center text-purple-400">
              <Users size={16} className="mr-2" />
              <span>Equipo: {project.team}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span>Deadline: {project.deadline}</span>
            </div>
          </div>

          {offset === 0 && (
            <Button 
              variant="outline" 
              className="w-full bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                EXPLORAR PROYECTO 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff")
    setIsVisible(true)
  }, [theme])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  return (
    <>
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
      <div className="min-h-screen bg-black/95 text-white p-4 md:p-8">
        <div className={`max-w-6xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            PROYECTOS CYBERPUNK
          </h1>
          <div className="relative w-full max-w-6xl h-[600px]">
            <div className="absolute inset-0 flex justify-center items-center">
              {projects.map((project, index) => {
                const offset = (index - currentIndex + projects.length) % projects.length
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    offset={offset > 2 ? offset - projects.length : offset}
                  />
                )
              })}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 z-30"
              onClick={handlePrevious}
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 z-30"
              onClick={handleNext}
              aria-label="Siguiente proyecto"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}