# 🧪 API REST de Productos - Proyecto Final Node.js

Este proyecto es el **Trabajo Final Integrador del curso de Node.js** impartido por **Talento Tech**. Se trata de una API REST construida con **Express.js** y conectada a una base de datos **Firestore (Firebase)** que permite **gestionar un catálogo de productos**.

---

## 🚀 Tecnologías utilizadas

- 🟢 **Node.js** – entorno de ejecución
- ⚡ **Express.js** – framework web backend
- 🔥 **Firebase Firestore** – base de datos NoSQL
- 🔐 **Firebase Admin SDK** – conexión backend a Firestore
- ⚙️ **dotenv** – gestión de variables de entorno
- 📫 **Thunder Client** o **Postman** – para probar los endpoints

---

## 📦 Funcionalidades principales

Esta API permite realizar operaciones completas sobre productos mediante un CRUD:

- 📥 **Crear** un nuevo producto
- 📄 **Leer** todos los productos o uno específico por ID
- ✏️ **Actualizar** un producto existente
- 🗑️ **Eliminar** un producto

Cada operación está expuesta como un endpoint **RESTful** siguiendo las buenas prácticas.

---

## 🔗 Endpoints disponibles

| Método | Ruta                        | Descripción                      |
|--------|-----------------------------|----------------------------------|
| GET    | `/api/products`             | Obtener todos los productos      |
| GET    | `/api/products/:id`         | Obtener un producto por ID       |
| POST   | `/api/products`             | Crear un nuevo producto          |
| PUT    | `/api/products/:id`         | Actualizar un producto existente |
| DELETE | `/api/products/:id`         | Eliminar un producto             |

---

## 📁 Estructura del proyecto
'''
proy_final/
├── src/
│ ├── config/ # Configuración de Firebase
│ │ └── db.js
│ │ └── serviceAccountKey.json
│ ├── controllers/ # Lógica de controladores
│ │ └── product.controller.js
│ ├── models/ # Acceso a la base de datos
│ │ └── product.model.js
│ ├── routes/ # Definición de rutas
│ │ └── product.route.js
│ ├── services/ # Lógica de negocio
│ │ └── product.service.js
│ ├── utils/ # Utilidades generales
│ │ └── index.js
│ └── index.js # Archivo principal del servidor
├── .env # Variables de entorno
├── package.json
└── README.md
'''
---

## 🔧 Configuración de Firebase

### 1. Instalar Firebase Admin SDK

Ejecutá el siguiente comando para instalar la dependencia:

```bash
npm install firebase-admin

Crear el archivo .env
En la raíz del proyecto, creá un archivo llamado .env con las siguientes variables (ajustá los valores con los datos de tu proyecto de Firebase):
ejemplo:
AUTHDOMAIN=api-proyecto.firebaseapp.com
STORAGEBUCKET=api-proyecto.appspot.com
MESSAGINGSENDERID=1234567890
APPID=1:1234567890:web:abc123def456
MEASUREMENTID=G-XXXXXXX
PROJECT_ID=api-proyecto
CLIENT_EMAIL=firebase-adminsdk-xxxxx@api-proyecto.iam.gserviceaccount.com
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU-CLAVE\n-----END PRIVATE KEY-----\n"

Como Obtener y ubicar la clave serviceAccountKey.json ?
Ingresá a la consola de Firebase: https://console.firebase.google.com

Seleccioná tu proyecto → ⚙️ Configuración del proyecto

En la pestaña Cuentas de servicio, hacé clic en "Generar nueva clave privada"

Se descargará un archivo .json

➡️ Pegá ese archivo en la siguiente ruta del proyecto:
src/config/serviceAccountKey.json

▶️ Cómo ejecutar el proyecto
Cloná el repositorio o descargalo.

Instalá las dependencias:

npm install
Configurá tu archivo .env con los datos necesarios.

Asegurate de que serviceAccountKey.json esté en src/config/.

Ejecutá el servidor en modo desarrollador:
npm run dev
Probá los endpoints con Thunder Client o Postman en:http://localhost:5000/api/products

✅ Ejemplo de solicitud POST (crear producto)
Método: POST
URL: http://localhost:5000/api/products
Body (JSON):

json
Copiar
Editar
{
  "nombre": "Coca Cola",
  "precio": 300,
  "disponible": true
}