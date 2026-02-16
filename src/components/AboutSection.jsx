import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <motion.section
      className="mt-4 rounded-xl border border-slate-600/70 bg-slate-900/55 px-5 py-5"
      id="about"
      data-aos="fade-up"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          className="h-28 w-28 rounded-full border-2 border-sky-300/80 object-cover"
          src="/image.png"
          alt="Profile"
        />
        <div>
          <h2 className="m-0 text-2xl font-semibold text-white">About</h2>
          <p className="mt-3 text-slate-300">
            I design user-friendly interfaces and build fast, maintainable web
            apps with React.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
