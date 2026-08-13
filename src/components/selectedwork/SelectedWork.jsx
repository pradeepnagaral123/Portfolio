import ProjectCarousel from './ProjectCarousel'
import ProjectHeader from './ProjectHeader'
import '../../styles/selectedwork.css'

export default function SelectedWork() {
  return (
    <div className="selectedwork" aria-label="Selected work">
      <div className="selectedwork__header">
        <ProjectHeader />
      </div>
      <ProjectCarousel />
    </div>
  )
}
