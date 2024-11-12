'use client'
import Particles from '@/components/ui/particles'
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Book, Calendar } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'
const educationData = [
  {
    year: 2022,
    title: "Maestría en Ingeniería de Software",
    institution: "Universidad Tecnológica",
    icon: GraduationCap,
    gpa: 3.8,
    focus: ["Arquitectura de Microservicios", "Computación en la Nube"]
  },
  {
    year: 2020,
    title: "Certificación AWS Solutions Architect",
    institution: "Amazon Web Services",
    icon: Award,
    score: 90
  },
  {
    year: 2018,
    title: "Licenciatura en Ciencias de la Computación",
    institution: "Universidad Nacional",
    icon: Book,
    gpa: 3.6,
    focus: ["Algoritmos Avanzados", "Bases de Datos"]
  }
]

export default function EducationSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({
    backend: 0,
    database: 0,
    cloud: 0
  });
  
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <><Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh /><div className="min-h-screen bg-black/95 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
          Trayectoria Educativa
        </h2>
        <BlurFade delay={0.25} inView>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 w-full h-1 bg-blue-500/20 top-1/2 transform -translate-y-1/2" />

            <div className="relative z-10 flex justify-between">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 mb-2" />
                  <span className="text-blue-400 font-semibold">{edu.year}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
                  <Card className="border border-blue-500/20 bg-gray-800/40 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute inset-0 bg-blue-500/5"
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }} />
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-full">
                          <edu.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                      <p className="text-gray-400 mb-4">{edu.institution}</p>
                      {edu.gpa && (
                        <div className="flex items-center mb-2">
                          <div className="w-full bg-blue-500/20 rounded-full h-2.5 mr-2">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(edu.gpa / 4) * 100}%` }}></div>
                          </div>
                          <span className="text-sm text-blue-400">GPA: {edu.gpa}</span>
                        </div>
                      )}
                      {edu.score && (
                        <div className="flex items-center mb-2">
                          <div className="w-full bg-blue-500/20 rounded-full h-2.5 mr-2">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${edu.score}%` }}></div>
                          </div>
                          <span className="text-sm text-blue-400">Score: {edu.score}%</span>
                        </div>
                      )}
                      {edu.focus && (
                        <div className="mt-4">
                          <span className="text-sm text-gray-400">Enfoque:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {edu.focus.map((item, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-purple-500/10 text-purple-400">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </div></>
  )
}