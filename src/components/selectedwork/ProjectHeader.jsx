export default function ProjectHeader() {
  return (
    <header className="sw-header">
      <div className="sw-header__left">
        <span className="sw-header__number">(01)</span>
        <h2 className="sw-header__title">
          <span className="sw-header__title-line">Selected</span>
          <span className="sw-header__title-line sw-header__title-line--accent">Works.</span>
        </h2>
      </div>
      <div className="sw-header__right">
        <p className="sw-header__desc">
          A selection of projects where I solved problems, explored ideas and
          delivered real impact.
        </p>
        <a href="#" className="sw-header__link">
          View All Projects
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  )
}
