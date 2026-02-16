import { motion } from 'framer-motion'

const timelineItems = [
  {
    type: 'Experience',
    period: '2024 - Present',
    title: 'Full Stack Developer',
    organization: 'Freelance Projects',
    description:
      'Built MERN applications with responsive UI, authentication, and API integrations.',
  },
  {
    type: 'Experience',
    period: '2023 - 2024',
    title: 'Frontend Developer',
    organization: 'Personal Portfolio Work',
    description:
      'Created modern React interfaces and improved performance using reusable components.',
  },
  {
    type: 'Education',
    period: '2021 - 2025',
    title: 'Bachelor of Technology',
    organization: 'Computer Science',
    description:
      'Studied software engineering, data structures, and web development fundamentals.',
  },
]

function ExperienceEducationTimeline() {
  return (
    <motion.section
      className="mt-4 rounded-xl border border-slate-600/70 bg-slate-900/55 px-5 py-5"
      id="timeline"
      data-aos="fade-up"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="m-0 text-2xl font-semibold text-white">
        Experience / Education
      </h2>

      <div className="relative mt-5 space-y-5 border-l border-slate-600 pl-5">
        {timelineItems.map((item, index) => (
          <motion.article
            key={`${item.type}-${item.period}-${item.title}`}
            className="relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="absolute -left-[1.45rem] top-1 h-3 w-3 rounded-full bg-sky-300" />
            <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-300">
              {item.type} . {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
            <p className="m-0 text-sm text-slate-300">{item.organization}</p>
            <p className="mt-2 text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default ExperienceEducationTimeline
