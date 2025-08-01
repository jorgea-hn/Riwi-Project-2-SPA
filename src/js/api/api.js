// Endpoint
const BASE_URL = 'http://localhost:3000';

// Functions CRUD


// Function GET
export async function apiGet(resource) {
  const res = await fetch(`${BASE_URL}/${resource}`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return await res.json();
}


// Function POST
export async function apiPost(resource, data) {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}


// Function PUT
export async function apiPut(resource, id, data) {
  const res = await fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

// Function Delete
export async function apiDelete(resource, id) {
  return await fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'DELETE'
  });
}
