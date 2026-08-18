import Hero from './components/Hero'
import About from './components/About'
import SelectedWork from './components/selectedwork/SelectedWork'
import Workflow from './components/Workflow'
import ContactPage from './components/contact/ContactPage'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import './styles/app.css'

function App() {
  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Workflow />
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}

export default App
