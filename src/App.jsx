import { useEffect } from 'react'
import AOS from 'aos'
import { Route, Routes } from 'react-router-dom'
import 'aos/dist/aos.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceEducationTimeline from './components/ExperienceEducationTimeline'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d1635_0%,#070b1b_100%)] px-5 pb-12 pt-4 text-slate-100">
      <div className="pointer-events-none absolute -left-40 -top-44 h-[26rem] w-[26rem] rounded-full bg-blue-500/30 blur-[54px]" />
      <div className="pointer-events-none absolute -bottom-36 -right-40 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/30 blur-[54px]" />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/timeline" element={<ExperienceEducationTimeline />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
