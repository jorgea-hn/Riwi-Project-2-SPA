export default function RegisterView() {
  return `
    <section id="register-section">
      <h2>Register</h2>
      <form id="register-form">
        <label for="fullname">FullName</label>
        <input type="text" id="register-name" placeholder="Nombre" required />
        <label for="email">Email</label>
        <input type="email" id="register-email" placeholder="Email" required />
        <label for="password">Password</label>
        <input
          type="password"
          id="register-password"
          placeholder="Password"
          required
        />
        <label for="confirmpassword">Confirm Password</label>
        <input
          type="password"
          id="confirm-register-password"
          placeholder="Confirm password"
          required
        />
        <button id="send-register" type="submit">Registrarse</button>
      </form>
      <p id="register-msg"></p>
    </section>
  `;
}
