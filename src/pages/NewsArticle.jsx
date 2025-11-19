import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { LuArrowLeft, LuArrowUpRight, LuClock3 } from 'react-icons/lu'
import { news } from '../data/news.js'
import '../styles/pages/news-article.css'

const NewsArticle = () => {
  const { slug } = useParams()

  const article = useMemo(() => news.find((item) => item.slug === slug), [slug])

  if (!article) {
    return <Navigate to="/novidades" replace />
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="news-article-hero">
          <div className="news-article-hero__content">
            <span className="badge">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="news-article-hero__meta" aria-label="Informações da publicação">
              <span>
                <LuClock3 size={18} /> {article.readTime}
              </span>
              <span>{article.publishedAt}</span>
            </div>
            <p className="text-muted">{article.summary}</p>
          </div>

          <figure className="news-article-cover">
            <img src={article.cover.src} alt={article.cover.alt} loading="lazy" />
            <figcaption className="text-muted" style={{ padding: '0.75rem 1rem' }}>
              Crédito: {article.cover.credits}
            </figcaption>
          </figure>
        </div>

        <div className="news-article-body">
          <div className="news-article-highlight">{article.highlight}</div>
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {article.references?.length > 0 && (
          <div className="news-article-references">
            <strong>Referências e leituras recomendadas</strong>
            <ul className="footer-links" style={{ gap: '0.5rem' }}>
              {article.references.map((reference) => (
                <li key={reference.url}>
                  <a href={reference.url} target="_blank" rel="noreferrer noopener">
                    {reference.label} <LuArrowUpRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="news-article-actions">
          <Link to="/novidades" className="btn btn-outline">
            <LuArrowLeft size={18} /> Voltar para novidades
          </Link>
          <Link to="/cursos" className="btn btn-primary">
            Explorar trilhas relacionadas
            <LuArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsArticle
