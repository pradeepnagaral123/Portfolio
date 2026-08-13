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
  SiGithub,
  SiHtml5,
  SiDocker,
  SiOpenjdk,
  SiPython,
  SiJavascript,} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

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
export const GithubIcon = brand(SiGithub, '#ffffff')
export const HtmlIcon = brand(SiHtml5, '#e34f26')

export const CssIcon = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z" />
    <path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z" />
    <path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" />
    <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" />
  </svg>
)
export const SqlIcon = brand(FaDatabase, '#f29111')
export const DockerIcon = brand(SiDocker, '#2496ed')
export const JavaIcon = brand(SiOpenjdk, '#f89820')
export const PythonIcon = brand(SiPython, '#3776ab')
export const JavaScriptIcon = brand(SiJavascript, '#f7df1e')
