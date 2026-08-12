import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Workflow from './components/Workflow'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import './styles/app.css'

function App() {
  return (
    <>
      <GrainOverlay />
      <main>
        <Hero />
        <About />
        <Projects />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
