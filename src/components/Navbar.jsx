import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const getNavClass = ({ isActive }) =>
  `transition hover:text-white ${isActive ? 'text-white' : ''}`

function Navbar() {
  return (
    <motion.header
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 rounded-xl border border-slate-600/60 bg-slate-900/50 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between"
      data-aos="fade-down"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <NavLink to="/" className="text-lg font-bold text-white">
        JavaBomber
      </NavLink>
      <nav>
        <ul className="flex list-none flex-wrap gap-4 p-0 text-sm font-semibold text-slate-200">
          <li>
            <NavLink to="/" end className={getNavClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={getNavClass}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={getNavClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={getNavClass}>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Navbar
