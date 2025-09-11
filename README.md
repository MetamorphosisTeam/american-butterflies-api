# 🦋 API de Mariposas Americanas

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express**, y **Sequelize**, conectada a una base de datos **MySQL**. Forma parte de una arquitectura backend que sirve datos a una aplicación frontend construida con React. La API gestiona datos de mariposas americanas, permitiendo operaciones CRUD completas, validación, paginación, y manejo robusto de errores.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize** (ORM)
- **MySQL** / MySQL Workbench
- **Jest + Supertest** (Testing)
- **Express-validator** (Validación y sanitización)
- **dotenv** (Variables de entorno)
- **ESLint + Prettier** (Linting & Formateo de código)
- **dbdiagram.io** (Diseño de base de datos)

---

## 📁 Estructura del proyecto

La arquitectura sigue el patrón **MVC (Modelo - Vista - Controlador)**:


---

## ⚙️ Configuración del proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/MetamorphosisTeam/american-butterflies-api.git
   cd american-butterflies-api
##Instalar las dependencias:
npm install

crea un archivo .env con variables necesarias
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=mariposas_db
PORT=3000

##Configurar la base de datos:

Usar MySQL Workbench para crear la base de datos.

Ejecutar las migraciones y seeders si existen.

El esquema relacional fue diseñado y documentado en dbdiagram.io.

##Testing

Se usa Jest y Supertest para testear endpoints y lógica del backend.

Los tests están ubicados en la carpeta /tests.
para correr los test: npm test 
Endpoints de la API
✔️ GET /api/americanbutterflies

Obtiene una lista paginada de mariposas.

✔️ GET /api/americanbutterflies/:id

Obtiene una mariposa por ID.

✔️ POST /api/americanbutterflies

Crea una nueva mariposa.

✔️ PUT /api/americanbutterflies/:id

Actualiza una mariposa existente.

✔️ DELETE /api/americanbutterflies/:id

Elimina una mariposa por su ID.

Validación y seguridad

Se utiliza express-validator para:

Validación de datos de entrada

Sanitización

Reutilización de middlewares

##Requisitos para el frontend

Se analizaron los requerimientos del frontend construido con React para determinar los datos que la API debía exponer, y se documentaron en los endpoints anteriores.

## 🔧 Scripts útiles

En el archivo `package.json` se incluyen algunos scripts útiles para el desarrollo y testing del proyecto.

Para ejecutar los tests en modo `watch`, puedes usar el siguiente comando:


npm test

Este comando ejecuta los tests en modo continuo, con watchAll para mantener los tests activos mientras desarrollas. También se desactiva el caché de Jest con --no-cache, se detectan handles abiertos con --detectOpenHandles, y la salida se presenta en modo detallado con --verbose.

Otro script útil es para ejecutar el seed de datos (mariposas) en la base de datos, utilizando el siguiente comando:

npm run db:seed

Este script ejecuta el archivo butterflySeeder.js en la carpeta seeders para cargar datos de ejemplo en la base de datos. Es útil para tener datos iniciales para pruebas y desarrollo.

🛡️ Middlewares de seguridad y utilidad

En el proyecto se utilizan algunas herramientas clave para mejorar la seguridad y la utilidad de la API. Helmet se usa para proteger la aplicación contra vulnerabilidades comunes configurando cabeceras HTTP de manera automática. Además, se ha habilitado CORS (Cross-Origin Resource Sharing) para gestionar qué dominios pueden acceder a los recursos de la API.

📦 Dependencias principales

El proyecto utiliza varias dependencias clave para el manejo del servidor, base de datos y validación de datos. Entre las principales se encuentran:

express: Framework de Node.js utilizado para manejar rutas, middleware y el servidor HTTP.

sequelize: ORM que facilita la interacción con la base de datos relacional (en este caso, MySQL).

mysql2: Driver que conecta Sequelize con la base de datos MySQL.

express-validator: Middleware que permite validar y sanitizar los datos de las peticiones HTTP.

dotenv: Permite cargar las variables de entorno desde un archivo .env.

helmet: Middleware para proteger la aplicación contra vulnerabilidades web mediante cabeceras HTTP seguras.

cors: Middleware que permite gestionar permisos para solicitudes entre dominios (CORS).

🧪 Dependencias de desarrollo

Además de las dependencias principales, el proyecto incluye algunas dependencias de desarrollo, como:

jest: Framework de testing para pruebas unitarias y de integración en JavaScript.

supertest: Utilizado para realizar pruebas HTTP sobre los endpoints de la API de Express.

cross-env: Permite establecer variables de entorno de manera compatible en diferentes sistemas operativos.

sequelize-cli: Herramienta de línea de comandos que facilita la gestión de modelos, migraciones y seeders de Sequelize.