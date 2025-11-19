import { NavLink } from 'react-router-dom'
import '../styles/pages/auth.css'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="page-section">
      <div className="container auth-shell">
        <div className="auth-card">
          <div>
            <span className="badge">Bem-vindo de volta</span>
            <h1>Entrar no InfoCursos</h1>
          </div>

          <p className="auth-description">
            Acesse sua conta para acompanhar progresso, participar da comunidade e continuar suas trilhas.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="login-email">E-mail</label>
              <input type="email" id="login-email" name="email" placeholder="seuemail@email.com" required />
            </div>

            <div className="field">
              <label htmlFor="login-password">Senha</label>
              <input type="password" id="login-password" name="password" placeholder="Digite sua senha" required />
            </div>

            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>

          <div className="auth-actions">
            <NavLink to="/recuperar-senha">Esqueci minha senha</NavLink>
            <span>
              Ainda não tem conta? <NavLink to="/cadastro">Criar conta agora</NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login

