import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    description:
      'A personal portfolio with smooth animations, responsive layout, and clean section-based navigation.',
    tech: ['React', 'Tailwind CSS', 'AOS'],
    liveDemo: 'https://example.com/portfolio-demo',
    github: 'https://github.com/your-username/portfolio',
  },
  {
    title: 'Task Manager App',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
    description:
      'A productivity app to create, organize, and track daily tasks with filters and status updates.',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveDemo: 'https://example.com/task-demo',
    github: 'https://github.com/your-username/task-manager',
  },
  {
    title: 'E-Commerce UI',
    image:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80',
    description:
      'Modern e-commerce frontend featuring product grids, cart flow, and mobile-first experience.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    liveDemo: 'https://example.com/shop-demo',
    github: 'https://github.com/your-username/ecommerce-ui',
  },
]

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="mt-4 rounded-xl border border-slate-600/70 bg-slate-900/55 px-5 py-5"
      data-aos="fade-up"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="m-0 text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 text-slate-300">
        Selected work with stack details and links.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950/45"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-44 w-full object-cover"
            />

            <div className="space-y-3 p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="rounded-md bg-slate-800 px-2 py-1 text-xs font-semibold text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-sky-300 px-3 py-2 text-sm font-bold text-slate-900 transition hover:bg-sky-200"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-500 px-3 py-2 text-sm font-bold text-slate-100 transition hover:bg-slate-800"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsSection
