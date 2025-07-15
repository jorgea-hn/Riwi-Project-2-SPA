// import pages package for route management
import page from "page";


// Function Login
export async function loginUser(email, password, msgElement) {
  const res = await fetch(`http://localhost:3000/users?email=${email}`);
  const users = await res.json();
  const user = users[0];

  if (!user || user.password !== password) {
    msgElement.textContent = "Credenciales incorrectas.";
    return false;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  page("/dashboard");
  return true;
}


// Function Register
export async function registerUser(name, email, password, msgElement) {
  const res = await fetch(`http://localhost:3000/users?email=${email}`);
  const exists = await res.json();

  if (exists.length > 0) {
    msgElement.textContent = "El usuario ya existe.";
    return false;
  }

  await fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, rolId: 2 })
  });

  // verification message
  msgElement.textContent = "Registro exitoso, redirigiendo...";
  setTimeout(() => page("/login"), 1500);
  return true;
}
