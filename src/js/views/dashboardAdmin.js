// Import CRUD 
import { apiGet, apiPost, apiPut, apiDelete } from "../api/api.js";


// Views of dashboardAdmin
export default function DashboardAdmin() {
  return `
    <section id="admin-dashboard">
      <header>
        <h2>Dashboard Admin</h2>
        <button id="logout">Cerrar sesión</button>
      </header>

      <section id="section-admin-form">
      
      <form id="event-form">
      <h3>Agregar Evento</h3>
        <input type="text" id="event-name" placeholder="Name" required />
        <input
          type="text"
          id="event-desc"
          placeholder="Descripción"
          required
        />
        <input type="date" id="event-date" placeholder="Date" required />
        <input
          type="number"
          id="event-capacity"
          placeholder="Capacidad Máxima"
          required
        />
        <button id="send-add-event" type="submit">Agregar Evento</button>
      </form>
      </section>

      <section id="section-events-list">
        <h2>Lista de Eventos</h2>
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
            <tbody id="events-list-content">
            </tbody>     
        </table>
        </div>
      </section>
    </section>
  `;
}

// CRUD Admin -----------------------------------------------------------------
export async function loadAdminDashboard() {
  const list = document.getElementById("events-list-content");
  const res = await apiGet("events");


  list.innerHTML = res.map(v => `
      <tr>
        <td>${v.name}</td>
        <td>${v.description}</td>
        <td>${v.capacity}</td>
        <td>${v.date}</td>
        <td>
        <button class="edit-event" data-id="${v.id}">Editar</button>
        <button class="delete-event" data-id="${v.id}">Eliminar</button>
        </td>
      </tr>
  `).join("");

  document.getElementById("event-form").onsubmit = async (e) => {
    const form = document.getElementById("event-form");
    e.preventDefault();
    const data = {
      name: document.getElementById("event-name").value.trim(),
      description: document.getElementById("event-desc").value.trim(),
      date: document.getElementById("event-date").value.trim(),
      capacity: parseInt(document.getElementById("event-capacity").value),
      visitors: []
    };
    await apiPost("events", data);
    alert("Evento creado!");
    form.reset();
    loadAdminDashboard();
  };

  list.onclick = async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("delete-event")) {
      await apiDelete("events", id);
      alert("Evento eliminado");
      loadAdminDashboard();
    }

    // if (e.target.classList.contains("edit-event")) {


    //   const data = {
    //     name: document.getElementById("event-name").value.trim(),
    //     description: document.getElementById("event-desc").value.trim(),
    //     date: document.getElementById("event-date").value.trim(),
    //     capacity: parseInt(document.getElementById("event-capacity").value),
    //     visitors: []
    //   };

    //   await apiPut("events", id, data);
    //   alert("Evento Actualizado");
    // }

  };
}

