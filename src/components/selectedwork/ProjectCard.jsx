import TechnologyIcons from './TechnologyIcons'

export default function ProjectCard({ project, index, total }) {
  return (
    <article className="p-card" data-index={index}>
      <div className="p-card__info">
        <div className="p-card__top">
          <span className="p-card__label">{project.label}</span>
          <span className="p-card__index">
            {String(index + 1).padStart(2, '0')}
            <span className="p-card__index-total">
              {' '}/ {String(total).padStart(2, '0')}
            </span>
          </span>
        </div>

        <h3 className="p-card__title">
          {project.title.map((line) => (
            <span key={line} className="p-card__title-line">
              {line}
            </span>
          ))}
        </h3>

        <p className="p-card__desc">{project.description}</p>

        <TechnologyIcons techs={project.techs} />

        <a href={project.url} className="p-card__cta">
          View Project
          <svg className="p-card__cta-arrow" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="p-card__preview">
        <div className="p-card__shot">
          <img
            className="p-card__img"
            src={project.image}
            alt={`${project.title.join(' ')} project preview`}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  )
}
