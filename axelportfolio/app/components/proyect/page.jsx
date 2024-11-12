'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import HyperText from '@/components/ui/hyper-text'
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Github,
  Code,
  Cpu,
  Server,
  Database,
  LineChart,
  Shield,
  Workflow
} from 'lucide-react'
import Image from 'next/image'

const project = {
  title: "Sistema de Protección Avanzada",
  description: "Plataforma de seguridad de última generación que implementa múltiples capas de protección y monitoreo en tiempo real para aplicaciones críticas.",
  image: "/placeholder.svg?height=600&width=1200",
  technologies: [
    { name: "Node.js", icon: Server, usage: 85 },
    { name: "Python", icon: Code, usage: 75 },
    { name: "MongoDB", icon: Database, usage: 90 },
    { name: "Docker", icon: Cpu, usage: 80 }
  ],
  challenges: [
    {
      title: "Escalabilidad",
      description: "Necesidad de manejar millones de solicitudes por segundo sin comprometer el rendimiento.",
      solution: "Implementación de arquitectura distribuida con balanceo de carga automático y cache distribuido."
    },
    {
      title: "Seguridad",
      description: "Protección contra ataques sofisticados y amenazas emergentes.",
      solution: "Sistema de detección de anomalías basado en IA y múltiples capas de autenticación."
    },
    {
      title: "Monitoreo",
      description: "Visualización en tiempo real del estado del sistema y alertas proactivas.",
      solution: "Dashboard centralizado con métricas en tiempo real y sistema de alertas automatizado."
    }
  ],
  metrics: [
    { label: "Tiempo de Respuesta", value: "50ms", improvement: "60%" },
    { label: "Disponibilidad", value: "99.99%", improvement: "25%" },
    { label: "Detección de Amenazas", value: "98.5%", improvement: "45%" }
  ],
  gallery: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]
}

export default function ProjectDetail() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 bg-blue-500/10" />
        
        {/* Floating UI Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 left-8 max-w-2xl p-6"
        >
          <HyperText
      className="text-4xl font-bold text-black dark:text-white"
      text={project.title}
    />
          <p className="text-lg text-gray-300">{project.description}</p>
        </motion.div>

        {/* Status Indicators */}
        <div className="absolute top-8 right-8 flex space-x-4">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-sm text-gray-400">{metric.label}</div>
              <div className="text-xl font-bold text-blue-400">{metric.value}</div>
              <div className="text-xs text-green-400">↑ {metric.improvement}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-gray-800/50 border border-blue-500/20">
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="challenges">Desafíos</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technologies */}
              <Card className="border border-blue-500/20 bg-gray-800/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Tecnologías</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="bg-gray-700/50 rounded-lg p-4 flex items-center space-x-4">
                          <tech.icon className="w-8 h-8 text-blue-400" />
                          <div>
                            <div className="font-medium">{tech.name}</div>
                            <div className="h-1 bg-gray-600 rounded-full mt-2">
                              <motion.div
                                className="h-full bg-blue-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.usage}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Metrics */}
              <Card className="border border-blue-500/20 bg-gray-800/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Métricas de Rendimiento</h3>
                  <div className="space-y-6">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{metric.label}</span>
                          <span className="text-blue-400">{metric.value}</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <motion.div
                            className="h-full bg-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: metric.improvement }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setActiveChallenge(challenge)}
                >
                  <Card className="border border-blue-500/20 bg-gray-800/40 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
                      <p className="text-gray-400">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            <Card className="border border-blue-500/20 bg-gray-800/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={project.gallery[activeGalleryIndex]}
                      alt={`Gallery image ${activeGalleryIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => setActiveGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 p-2 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % project.gallery.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 p-2 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Github className="mr-2 h-4 w-4" /> Ver Código
          </Button>
          <Button variant="outline" className="border-blue-500/20 hover:bg-blue-500/20">
            <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo
          </Button>
        </div>
      </div>

      {/* Challenge Modal */}
      <AnimatePresence>
        {activeChallenge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setActiveChallenge(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold mb-4">{activeChallenge.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-400">Desafío</h4>
                  <p className="text-gray-300">{activeChallenge.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-400">Solución</h4>
                  <p className="text-gray-300">{activeChallenge.solution}</p>
                </div>
              </div>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => setActiveChallenge(null)}
              >
                Cerrar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}