import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
  SiOpenjdk,
  SiPython,
  SiJavascript,} from 'react-icons/si'

const brand =
  (Component, color) =>
  (props) =>
    <Component {...props} color={color} />

export const ReactIcon = brand(SiReact, '#61DAFB')
export const NextIcon = brand(SiNextdotjs, '#ffffff')
export const TypeScriptIcon = brand(SiTypescript, '#3178c6')
export const TailwindIcon = brand(SiTailwindcss, '#38bdf8')
export const ThreeIcon = brand(SiThreedotjs, '#ffffff')
export const NodeIcon = brand(SiNodedotjs, '#5fa04e')
export const ExpressIcon = brand(SiExpress, '#ffffff')
export const MongoIcon = brand(SiMongodb, '#47a248')
export const GitIcon = brand(SiGit, '#f05032')
export const DockerIcon = brand(SiDocker, '#2496ed')
export const JavaIcon = brand(SiOpenjdk, '#f89820')
export const PythonIcon = brand(SiPython, '#3776ab')
export const JavaScriptIcon = brand(SiJavascript, '#f7df1e')
