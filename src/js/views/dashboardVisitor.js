import { apiGet, apiPut } from "../api/api.js";

export default function DashboardVisitor() {
  return `
    <section id="visitor-dashboard">
      <header>
        <h2>Dashboard Visitor</h2>
        <button id="logout">Cerrar sesión</button>
      </header>

    <section id="section-events-list">
        <h2>The Events proximos</h2>
        <div id="events-list">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Date</th>
              <th>Options</th>
            </tr>
            </thead>
            <tbody id="available-events-content">
            </tbody>     
        </table>
        </div>
      </section>

    <section id="section-events-list">
        <h2>Mis Events</h2>
        <div id="events-list">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody id="my-events-content">
            </tbody>     
        </table>
        </div>
      </section>

    </section>
  `;
}

export async function loadVisitorDashboard(userId) {
  const allEvents = await apiGet("events");
  const available = document.getElementById("available-events-content");
  const mine = document.getElementById("my-events-content");


  const enrolled = allEvents.filter(v => v.visitors.includes(userId));
  const open = allEvents.filter(v => !v.visitors.includes(userId) && v.visitors.length < v.capacity);

  available.innerHTML = open.map(v => `
    <tr>
      <td>${v.name}</td>
      <td>${v.description}</td>
      <td>${v.capacity}</td>
      <td>${v.date}</td>
      <td>
      <button class="enroll" data-id="${v.id}">Inscribirme</button>
      </td>
    </tr>
  `).join("");

  mine.innerHTML = enrolled.map(v => `
    <tr>
      <td>${v.name}</td>
      <td>${v.description}</td>
      <td>${v.date}</td>
    </tr>
  `).join("");

  available.onclick = async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("enroll")) {
      const events = await apiGet(`events/${id}`);
      if (events.visitors.length >= events.capacity) {
        alert("No hay cupos disponibles.");
        return;
      }
      events.visitors.push(userId);
      await apiPut("events", id, events);
      alert("Inscripción exitosa!");
      loadVisitorDashboard(userId);
    }
  };
}

