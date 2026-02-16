import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ExperienceEducationTimeline from './ExperienceEducationTimeline'
import { motion } from 'framer-motion'
import ProjectsSection from './ProjectsSection'
import { Link } from 'react-router-dom'
import SkillsSection from './SkillsSection'

const MotionLink = motion(Link)

function Intro() {
  return (
    <>
      <section className="py-14 md:py-20" id="home">
        <motion.p
          className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-blue-300"
          data-aos="fade-up"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Feature Intro
        </motion.p>
        <motion.h1
          className="mt-3 max-w-[16ch] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="100"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Hi, I&apos;m Lalit...
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          I am a passionate Full Stack Developer specializing in the MERN stack
          (MongoDB, Express.js, React.js, and Node.js). I enjoy building
          responsive and scalable web applications with clean UI and efficient
          backend logic.
        </motion.p>
        <MotionLink
          className="mt-7 inline-block rounded-lg bg-sky-300 px-5 py-3 font-bold text-slate-900 transition hover:bg-sky-200"
          to="/contact"
          data-aos="fade-up"
          data-aos-delay="300"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </MotionLink>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceEducationTimeline />
      <ContactSection />
    </>
  )
}

export default Intro
