import { LuTrendingUp, LuBriefcase, LuLaptop } from 'react-icons/lu'
import ilustracaoTI from '../assets/ilustracao-ti.png'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/about.css'

const About = () => (
  <section className="page-section">
    <div className="container about-grid">
      <div className="surface-card about-content">
        <span className="badge">Mercado em expansão</span>
        <h1>Por que carreira em Tecnologia da Informação?</h1>
        <p>
          A Tecnologia da Informação (TI) é uma das áreas mais promissoras e dinâmicas da atualidade. Empresas de todos os
          setores utilizam tecnologia para ganhar eficiência, inovar e criar novas experiências para clientes.
        </p>
        <p>
          De acordo com levantamentos recentes, a média salarial nacional para profissionais de TI é superior a{' '}
          <strong>R$ 3.800,00</strong>, podendo ultrapassar <strong>R$ 16.000,00</strong> para posições estratégicas e de
          liderança.
        </p>
        <p>
          Além da remuneração atrativa, benefícios como trabalho remoto, assistência à saúde, incentivos para bem-estar e
          trilhas de desenvolvimento contínuo se tornaram comuns na área.
        </p>

        <ul className="about-list">
          <li>
            <IconCircle icon={LuTrendingUp} />
            <span>
              <strong>Crescimento constante:</strong> previsão de milhares de novas vagas abertas anualmente no Brasil.
            </span>
          </li>
          <li>
            <IconCircle icon={LuBriefcase} tone="accent" />
            <span>
              <strong>Diversidade de áreas:</strong> desenvolvimento de software, dados, segurança, UX, produto e muito mais.
            </span>
          </li>
          <li>
            <IconCircle icon={LuLaptop} tone="success" />
            <span>
              <strong>Flexibilidade:</strong> oportunidades de trabalho remoto e projetos globais desde os primeiros anos de
              carreira.
            </span>
          </li>
        </ul>
      </div>

      <div className="about-media">
        <img src={ilustracaoTI} alt="Profissionais colaborando na área de tecnologia" loading="lazy" />
        <div className="about-floating">
          <strong>+40%</strong>
          <span>de crescimento na demanda por especialistas em TI até 2026</span>
        </div>
      </div>
    </div>
  </section>
)

export default About

