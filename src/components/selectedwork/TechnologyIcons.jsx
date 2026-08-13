import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiPandas,
} from 'react-icons/si'

const iconMap = {
  React: { Icon: SiReact, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#83CD29' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#38BDF8' },
  Python: { Icon: SiPython, color: '#3776AB' },
  Pandas: { Icon: SiPandas, color: '#150458' },
}

export default function TechnologyIcons({ techs }) {
  return (
    <ul className="p-tech" aria-label="Technologies">
      {techs.map((tech) => {
        const entry = iconMap[tech]
        return (
          <li key={tech} className="p-tech__item">
            {entry && <entry.Icon className="p-tech__icon" color={entry.color} />}
            <span>{tech}</span>
          </li>
        )
      })}
    </ul>
  )
}
