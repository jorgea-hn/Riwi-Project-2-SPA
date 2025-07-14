import page from "page";
import LandingView from "./views/landing.js";
import LoginView from "./views/login.js";
import RegisterView from "./views/register.js";
import DashboardAdmin, { loadAdminDashboard } from "./views/dashboardAdmin.js";
import DashboardVisitor, { loadVisitorDashboard } from "./views/dashboardVisitor.js";
import ErrorView from "./views/error.js";
import { loginUser, registerUser } from "./auth/auth.js";

const app = document.querySelector("#app");


function isAuthenticated() {
  return !!localStorage.getItem("currentUser");
}


function getUserRole() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return parseInt(user?.rolId);
}


page("/", () => {
  if (isAuthenticated()) {
    page("/dashboard");
  } else {
    app.innerHTML = LandingView();
  }
});

page("/login", () => {
  if (isAuthenticated()) {
    page("/dashboard");
  } else {
    app.innerHTML = LoginView();
  }
});

page("/register", () => {
  if (isAuthenticated()) {
    page("/dashboard");
  } else {
    app.innerHTML = RegisterView();
  }
});

page("/dashboard", () => {
  if (!isAuthenticated()) {
    page("/error");
  } else if (getUserRole() === 1) {
    app.innerHTML = DashboardAdmin();
    loadAdminDashboard();
  } else if (getUserRole() === 2) {
    app.innerHTML = DashboardVisitor();
    const user = JSON.parse(localStorage.getItem("currentUser"));
    loadVisitorDashboard(user.id); 
  } else {
    app.innerHTML = ErrorView("Rol desconocido");
  }
});

page("/error", () => {
  app.innerHTML = ErrorView();
});

page();


document.addEventListener("click", (e) => {
  if (e.target.id === "go-login") page("/login");
  if (e.target.id === "go-register") page("/register");
  if (e.target.id === "logout") {
    localStorage.removeItem("currentUser");
    page("/");
  }
});


document.addEventListener("submit", async (e) => {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const msg = document.getElementById("login-msg");
    await loginUser(email, password, msg);
  }

  if (e.target.id === "register-form") {
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();
    const msg = document.getElementById("register-msg");
    await registerUser(name, email, password, msg);
  }
});
