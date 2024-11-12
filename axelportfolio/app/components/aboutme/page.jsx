'use client'

import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Terminal, Network, Mail, Github, Linkedin } from 'lucide-react'
import Particles from '@/components/ui/particles'
import { BorderBeam } from '@/components/ui/border-beam';
import Image from 'next/image';
export default function Aboutme() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
      <div className="min-h-screen bg-black/95 text-white p-4 md:p-8">
        <div className={`max-w-6xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
            <Card className="border-none bg-black/40 backdrop-blur-sm relative overflow-hidden">
            <BorderBeam></BorderBeam>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-black p-2">
                      <Image
                      src="/gato.png"
                      width={1024}
                      height={1024}>
                      </Image>
                    </div>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Full Stack Developer
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                      Especializado en la creación de soluciones escalables y de alto rendimiento. Apasionado por implementar arquitecturas robustas y optimizar procesos complejos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience and Values Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none border-blue-500/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                  <Server className="w-5 h-5" /> Experiencia y Logros
                </h2>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Implementación de soluciones escalables y sostenibles.</li>
                  <li>Experiencia en migración a arquitecturas de microservicios.</li>
                  <li>Optimización de procesos, logrando mejoras de hasta un 40% en eficiencia.</li>
                  <li>Foco en el desarrollo de sistemas de alta disponibilidad y seguridad.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none border-blue-500/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                  <Network className="w-5 h-5" /> Filosofía de Trabajo
                </h2>
                <p className="text-gray-400">
                  Apasionado por el aprendizaje continuo y comprometido con la implementación de buenas prácticas en el desarrollo de software. Mi enfoque se basa en crear soluciones que sean eficientes, escalables y que mantengan la calidad y robustez a largo plazo.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="border-none border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="outline" className="bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20">
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto
                </Button>
                <Button variant="outline" className="bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
