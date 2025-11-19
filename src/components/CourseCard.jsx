import { LuArrowUpRight } from 'react-icons/lu'
import '../styles/course-card.css'

const CourseCard = ({ course }) => {
  const { media } = course
  const Icon = media.type === 'icon' ? media.icon : null
  const headingId = 'course-' + course.id

  return (
    <article className="course-card surface-card" aria-labelledby={headingId}>
      <div className="course-card__media" aria-hidden="true">
        {media.type === 'image' && <img src={media.src} alt={media.alt} />}
        {media.type === 'icon' && Icon && <Icon aria-hidden="true" />}
      </div>

      <div className="course-card__content">
        <div className="course-card__meta">
          <span className="tag">{course.duration}</span>
        </div>

        <h3 id={headingId} className="course-card__title">
          {course.title}
        </h3>

        <p className="course-card__description">{course.description}</p>

        <div className="course-card__tags" aria-label="Temas do curso">
          {course.tags.map((tag) => (
            <span className="badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="course-card__actions">
          <a className="course-card__link" href="#">
            Ver Curso
          </a>
        </div>
      </div>
    </article>
  )
}

export default CourseCard

