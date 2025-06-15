# 📝 TPI DevOps - ToDo List App

Aplicación desarrollada como Trabajo Práctico Integrador (TPI) para aplicar prácticas de DevOps: desarrollo, contenerización, testing y despliegue continuo.

---

## 🚀 Descripción

Se trata de una API REST sencilla para gestionar tareas (to-do list), desarrollada en **Node.js**, con persistencia en **MongoDB**, y con integración CI/CD mediante **GitHub Actions** y **Docker Hub**.

---

## 🛠️ Tecnologías utilizadas

- Node.js (Express)
- MongoDB (vía Mongoose)
- Docker y Docker Compose
- GitHub Actions (CI/CD)
- Jest + Supertest (testing)
- Docker Hub (almacenamiento de imágenes)

---

## 📦 Estructura del Proyecto

tpi-todolist/<br>
├── src/<br>
│ └── app.js<br>
├── tests/<br>
│ └── api.test.js<br>
├── .github/<br>
│ └── workflows/<br>
│ └── ci.yml<br>
├── Dockerfile<br>
├── docker-compose.yml<br>
├── package.json<br>
├── .env<br>
├── frontend-todolist/<br>
│ └── src/<br>
│      └── App.js/<br>
│      └── index.js/<br>
└── README.md<br>

## 🧪 Testing

Los tests están automatizados con **Jest** y **Supertest**.

Ejecutar localmente con:

```bash
npm install
npm test
```

En CI, se conectan automáticamente a un contenedor MongoDB usando:

```bash
MONGO_URL="mongodb://127.0.0.1:27017/todolist" npm test
```

## 🐳 Dockerización

Build de la imagen:

```bash
docker build -t tpi-todolist .
```

Correr con Docker Compose:

```bash
docker-compose up --build
```

La app estará disponible en:

📍 http://localhost:3000/tasks

## 🔁 CI/CD

Cada push a la rama main ejecuta:

- Instalación de dependencias
- Pruebas automatizadas
- Construcción de imagen Docker
- Push automático a Docker Hub

## 🔗 Docker Hub:

https://hub.docker.com/repository/docker/USUARIO/tpi-todolist

## 📸 Capturas del pipeline:

✅ Tests ejecutándose:

🐳 Imagen subida a Docker Hub:

## ☁️ Despliegue

(✳️ Opcional) Puede desplegarse en servicios como:

- Render.com
- Railway.app
- Heroku

# 👥 Roles del equipo

Desarrollo y backend: [Tu nombre]
CI/CD: [Tu nombre]
Dockerización: [Tu nombre]

## ✅ Conclusiones

Este proyecto permitió aplicar conceptos claves de DevOps en un entorno práctico, incluyendo automatización de pruebas, integración continua, y contenerización con Docker.

Se logró un entorno reproducible, escalable y fácilmente desplegable.

## 📄 Licencia
Uso académico – Tecnicatura en Desarrollo de Software