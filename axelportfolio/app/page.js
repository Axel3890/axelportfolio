import Image from "next/image";
import Aboutme from "./components/aboutme/page";
import EducationSection from "./components/education/page";
import ContactSection from "./components/contact/page";
import ProjectDetail from "./components/proyect/page";
import ProjectsSection from "./components/projects/page";
import Navbar from "./components/navbar/page";
import Card from "./components/card/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-black/95"> {/* Ajusta el valor según la altura de tu navbar */}
        <Aboutme />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
        <ProjectDetail />
        <Card></Card>
      </main>
    </>
  )
}