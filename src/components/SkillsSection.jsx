import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const skillsByCategory = {
  Frontend: [
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 88 },
    { name: "JavaScript", level: 86 },
  ],
  Backend: [
    { name: "Node.js", level: 84 },
    { name: "Express.js", level: 82 },
    { name: "REST APIs", level: 85 },
  ],
  Database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 74 },
    { name: "Firebase", level: 72 },
  ],
};

function SkillsSection() {
  const categories = Object.keys(skillsByCategory);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeSkills = useMemo(
    () => skillsByCategory[activeCategory] ?? [],
    [activeCategory],
  );

  return (
    <motion.section
      className="mt-4 rounded-xl border border-slate-600/70 bg-slate-900/55 px-5 py-5"
      id="skills"
      data-aos="fade-up"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="m-0 text-2xl font-semibold text-white">Skills</h2>
      <p className="mt-2 text-slate-300">
        Choose a category to explore my strongest tools.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <motion.button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-sky-300 text-slate-900"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-5 space-y-4">
        {activeSkills.map((skill) => (
          <div key={skill.name} className="rounded-lg bg-slate-950/45 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-slate-100">{skill.name}</span>
              <span className="text-xs font-bold text-blue-300">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-700">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-sky-300 to-blue-500 transition-all duration-700 ease-out"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default SkillsSection;
