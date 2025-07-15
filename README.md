# SPA – Event Manager

**Description:**
**Single Page Application (SPA)** project developed with **Vite, HTML, CSS, and Vanilla JavaScript, Node**.
It simulates a **Page that allows managing events** where there are **two types of users**:
- **Administrator:** can manage events, create, edit, and delete.
- **Visitor:** can view events and register.

All information is saved using **json-server** as the simulated backend and **LocalStorage** for the session.

## Technologies Used

- **HTML5**, **CSS3**, **Vanilla JavaScript**,**Node**
- **Vite** as the development environment
- **page.js** for SPA routing
- **json-server** to simulate the REST API
- **Thunder Client** (or Postman) for testing endpoints
- **LocalStorage** for session management

## Main Features

* User registration (Visitor role)
* Login and logout
* Protected routes and role-based redirection
* **Admin** panel: create, view, and delete events
* **Visitor** panel: view available events and register
* Event-based quota control
* Fluid SPA navigation without reloading the page
* Error page for invalid routes
* Test collection ready to import into Thunder Client

## 🗂️ Structure of the project

```bash
📦 jorgehenriquez511/
├─ 📁 public/
│ └─ db.json
├─ 📁 src/
│ ├─ 📁 api/
│ │ └─ api.js
│ ├─ 📁 auth/
│ │ ├─ auth.js
│ ├─ 📁 views/
│ │ ├─ landing.js
│ │ ├─ login.js
│ │ ├─ register.js
│ │ ├─ dashboardAdmin.js
│ │ ├─ dashboardVisitor.js
│ │ └─ error.js
│ └─ main.js
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md
└─ thunder-collection.json
```

## How to run locally

1. Install dependencies

```bash
npm install
```

2. Run json-server (API)

```bash
npx json-server --watch public/db.json --port 3000
```

3. Run Vite for the frontend

```bash
npm run dev
```

## Default Users
|Role |Email |Password
|----------|----------|----------|
|Admin |admin@example.com| admin123
|visitor |Register from the app |

## Session Management
* The authenticated user is saved in localStorage under the currentUser key.

* Logout: clears localStorage and redirects to home.

## Thunder Client Collection
The thunder-collection.json file is included for testing:

* GET for events

* POST for creating events

* PUT for editing events

* DELETE for deleting events

* GET for users

* POST for users (registration)

You can import it directly into Thunder Client (or Postman).

## Author
* Name: Jorge Henriquez Novoa
* Email: jorgeahenriqueznovoa@gmail.com
* Clan: Sierra