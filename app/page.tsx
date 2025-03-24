import Introduction from "@/components/sections/Introduction"
import About from "@/components/sections/About"
import Background from "@/components/sections/Background"
import Services from "@/components/sections/Services"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import ScrollProgress from "@/components/ui/ScrollProgress"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Introduction />
      <About />
      <Background />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

