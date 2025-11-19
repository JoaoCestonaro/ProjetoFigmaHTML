import { NavLink } from 'react-router-dom'
import { LuSparkles, LuArrowUpRight, LuShieldCheck, LuUsers, LuGraduationCap, LuThumbsUp } from 'react-icons/lu'
import heroIllustration from '../assets/ilustracao-tecnologia.png'
import { courses } from '../data/courses.js'
import { news } from '../data/news.js'
import { highlights } from '../data/features.js'
import CourseCard from '../components/CourseCard.jsx'
import NewsCard from '../components/NewsCard.jsx'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/home.css'

const stats = [

]

const Home = () => {
  const featuredCourses = courses.slice(0, 3)
  const latestNews = news.slice(0, 2)

  return (
    <>
      <section className="page-section">
        <div className="container home-hero">
          <div className="home-hero__content">

            <h1 className="home-hero__title">
              O lugar certo para você desenvolver uma carreira sólida em tecnologia.
            </h1>

            <p className="home-hero__description">
              Bem-vindo ao InfoCursos: domine programação, design e inovação digital com aulas atuais, projetos guiados e mentores do mercado. Do zero ao avançado, avance no seu ritmo.
            </p>

            <div className="home-hero__actions">
              <NavLink to="/cursos" className="btn btn-primary">
                Ver Cursos
              </NavLink>
            </div>
          </div>

        </div>
      </section>


      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Linguagens principais</h2>
              <p>
                Escolha o curso certo para onde você está agora. Em cada módulo, pratique com desafios reais e receba feedbacks que ajudam você a evoluir.
              </p>
            </div>
          </div>

          <div className="grid grid-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Notícias</h2>
              <p>
                Conteúdos, eventos e insights escolhidos a dedo pelo time InfoCursos para você entender o mercado de tecnologia sem distrações.
              </p>
            </div>
          </div>

          <div className="news-preview-grid">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

