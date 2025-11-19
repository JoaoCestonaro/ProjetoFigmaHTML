import { useState } from 'react'
import { LuMail, LuPhone, LuMessageCircle } from 'react-icons/lu'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/contact.css'

const contactOptions = [
  {
    id: 'email',
    title: 'Email',
    description: 'Fale conosco para suporte e informações sobre cursos e serviços.',
    highlight: 'atendimento@infocursos.com',
    icon: LuMail,
  },
  {
    id: 'phone',
    title: 'Telefone',
    description: 'Atendimento de segunda a sexta, das 8h às 17h (horário de Brasília).',
    highlight: '(11) 99999-9999',
    icon: LuPhone,
  }
];


const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="contact-hero">
          <h1>Conecte-se com nosso time e impulsione sua trajetória em tecnologia</h1>
          <p>
            Entre em contato para tirar dúvidas sobre planos, receber suporte nas trilhas ou compartilhar sugestões de conteúdos.
            Nossa equipe responde em até um dia útil.
          </p>
        </div>


        <div className="contact-grid">
          {contactOptions.map((option) => (
            <div key={option.id} className="surface-card contact-card">
              <IconCircle icon={option.icon} />
              <strong>{option.title}</strong>
              <span>{option.description}</span>
              <span className="highlight">{option.highlight}</span>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__grid">
            <div className="field">
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="field">
              <label htmlFor="topic">Qual assunto?</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="planos">Planos, preços e assinaturas</option>
                <option value="suporte">Suporte e orientação técnica</option>
                <option value="parcerias">Parcerias, eventos e networking</option>
                <option value="feedback">Sugestões e feedback</option>
                <option value="geral">Assuntos gerais</option>
                <option value="comercial">Consultas comerciais</option>


              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="btn btn-primary">
              Enviar mensagem
            </button>
            <p>{submitted ? 'Recebemos sua mensagem! Responderemos em breve.' : ''}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

