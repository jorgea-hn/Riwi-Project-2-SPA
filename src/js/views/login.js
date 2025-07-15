// Views for Login with form
export default function LoginView() {
  return `
    <section id="login-section">
        <h2>Iniciar sesión</h2>
        <form id="login-form">
            <label for="email">Email</label>
            <input type="email" id="login-email" placeholder="email" required />
            <label for="password">Password</label>
            <input type="password" id="login-password" placeholder="password" required />
            <button id="send-login" type="submit">Entrar</button>
        </form>
        <p id="login-msg"></p>
    </section>
  `;
}
