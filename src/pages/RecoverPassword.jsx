import { NavLink } from 'react-router-dom'
import '../styles/pages/auth.css'

const RecoverPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="page-section">
      <div className="container auth-shell">
        <div className="auth-card">
          <div>
            <span className="badge">Esqueci minha senha</span>
            <h1>Recuperar acesso</h1>
          </div>

          <p className="auth-description">
            Informe o e-mail cadastrado para receber um link seguro de redefinição de senha. O link ficará ativo por 30
            minutos.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="recover-email">E-mail cadastrado</label>
              <input type="email" id="recover-email" name="email" placeholder="seuemail@email.com" required />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar link de redefinição
            </button>
          </form>

          <div className="auth-actions">
            <NavLink to="/login">Voltar para login</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecoverPassword

