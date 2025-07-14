# SPA – Manejador de Eventos

**Descripción:**  
Proyecto **Single Page Application (SPA)** desarrollado con **Vite, HTML, CSS y JavaScript Vanilla**.  
Simula un **Pagina que permite manejar eventos** donde hay **2 tipos de usuarios**:  
- **Administrador:** puede gestionar eventos, crear, editar y eliminar.
- **Visitante:** puede ver eventos e inscribirse.

Toda la información se guarda usando **json-server** como backend simulado y **LocalStorage** para la sesión.



## Tecnologías utilizadas

- **HTML5**, **CSS3**, **JavaScript Vanilla**
- **Vite** como entorno de desarrollo
- **page.js** para el enrutamiento SPA
- **json-server** para simular la API REST
- **Thunder Client** (o Postman) para testear endpoints
- **LocalStorage** para manejo de sesión



##  Funcionalidades principales

* Registro de usuario (rol visitante)  
* Inicio de sesión y cierre de sesión  
* Rutas protegidas y redireccionamiento según rol  
* Panel de **Admin**: crear, ver, eliminar cursos  
* Panel de **Visitador**: ver eventos disponibles e inscribirse
* Control de cupos por evento 
* Navegación SPA fluida sin recargar la página  
* Página de error para rutas no válidas  
* Colección de pruebas lista para importar en Thunder Client



## 🗂️ Estructura del proyecto

```bash
📦 jorgehenriquez511/
├─ 📁 public/
│   └─ db.json
├─ 📁 src/
│   ├─ 📁 api/
│   │   └─ api.js
│   ├─ 📁 auth/
│   │   ├─ login.js
│   │   └─ register.js
│   ├─ 📁 views/
│   │   ├─ landing.js
│   │   ├─ login.js
│   │   ├─ register.js
│   │   ├─ dashboardAdmin.js
│   │   ├─ dashboardVisitor.js
│   │   └─ error.js
│   └─ main.js
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md
└─ thunder-collection.json
```

## Cómo ejecutar localmente

1. Instalar dependencias

```bash
npm install
```

2. Ejecutar json-server (API)

```bash
npx json-server --watch public/db.json --port 3000
```

3. Ejecutar Vite para frontend

```bash
npm run dev
```


## Usuarios por defecto
|Rol	|Email	|Contraseña
|----------|----------|----------|
|Admin	|admin@example.com|	admin123
|Estudiantes |Se registran desde la app	|


## Manejo de sesión
* El usuario autenticado se guarda en localStorage bajo la clave currentUser.

* Cierre de sesión: limpia localStorage y redirige a inicio.


## Colección Thunder Client
Se incluye el archivo thunder-collection.json para probar:

* GET de eventos

* POST para crear eventos

* PUT para editar eventos

* DELETE para eliminar eventos

* GET usuarios

* POST usuarios (registro)

Puedes importarlo directamente en Thunder Client (o Postman).


## Autor
Jorge Henriquez Novoa
📧 jorgeahenriqueznovoa@gmail.com


