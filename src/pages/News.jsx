import { LuNewspaper } from 'react-icons/lu'
import NewsCard from '../components/NewsCard.jsx'
import { news } from '../data/news.js'
import '../styles/pages/news.css'

const News = () => (
  <section className="page-section">
    <div className="container">
      <div className="news-hero">
        <h1>Atualizações e tendências do mundo da tecnologia</h1>

        <p>
          Uma seleção dos assuntos mais relevantes em desenvolvimento, produto, dados e carreira. Conteúdo objetivo,
          atualizado e pensado para impulsionar sua evolução profissional.
        </p>

      </div>

      <div className="news-grid">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
)

export default News
