import { NavLink } from 'react-router-dom'
import '../styles/pages/auth.css'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="page-section">
      <div className="container auth-shell">
        <div className="auth-card">
          <div>
            <span className="badge">Comece hoje</span>
            <h1>Criar conta gratuita</h1>
          </div>

          <p className="auth-description">
            Tenha acesso a trilhas completas, comunidade ativa e materiais extras para acelerar sua jornada na tecnologia.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="register-name">Nome completo</label>
              <input type="text" id="register-name" name="name" placeholder="Como quer ser chamado?" required />
            </div>

            <div className="field">
              <label htmlFor="register-email">E-mail</label>
              <input type="email" id="register-email" name="email" placeholder="seuemail@email.com" required />
            </div>

            <div className="field">
              <label htmlFor="register-password">Senha</label>
              <input type="password" id="register-password" name="password" placeholder="Crie uma senha segura" required />
            </div>

            <div className="field">
              <label htmlFor="register-confirm">Confirmar senha</label>
              <input
                type="password"
                id="register-confirm"
                name="passwordConfirm"
                placeholder="Repita sua senha"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Criar conta
            </button>
          </form>

          <div className="auth-actions">
            <span>
              Já possui conta? <NavLink to="/login">Entrar</NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register

