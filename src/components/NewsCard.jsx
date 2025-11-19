import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuClock3 } from 'react-icons/lu'
import '../styles/news-card.css'

const NewsCard = ({ item, compact = false }) => {
  const classes = 'news-card surface-card' + (compact ? ' compact' : '')
  const headingId = 'news-' + item.id

  return (
    <article className={classes} aria-labelledby={headingId}>
      <div className="news-card__image">
        <img src={item.cover.src} alt={item.cover.alt} loading="lazy" />
        <span className="badge news-card__badge">{item.category}</span>
      </div>

      <div className="news-card__content">
        <div className="news-card__meta" aria-label="Informações da publicação">
          <span>{item.publishedAt}</span>
          <span>
            <LuClock3 size={16} /> {item.readTime}
          </span>
        </div>

        <h3 id={headingId} className="news-card__title">
          {item.title}
        </h3>

        <p className="news-card__summary">{item.summary}</p>

        {!compact && <p className="news-card__highlight">{item.highlight}</p>}

        <div className="news-card__footer">
          <Link className="news-card__link" to={`/novidades/${item.slug}`}>
            Ler artigo completo
            <LuArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
