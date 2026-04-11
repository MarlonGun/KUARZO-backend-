# Kuarzo Backend 🚀

Este es el servidor backend de la plataforma Kuarzo, construido con Node.js, Express y TypeScript. Utiliza Prisma como ORM para la gestión de la base de datos MySQL.

## 📋 Requisitos Previos

Asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* [MySQL](https://www.mysql.com/) o MariaDB

## 🛠️ Instalación y Configuración

Sigue estos pasos para clonar e instalar el proyecto en un nuevo equipo:

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd KUARZO-backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y añade tu cadena de conexión a MySQL.
**Importante:** Prisma 7 utiliza un archivo `prisma.config.ts` para la configuración del adaptador, pero la URL se lee desde este `.env`.

```env
DATABASE_URL="mysql://USUARIO:CONTRASEÑA@localhost:3306/kuarzo_db"
```
*(Ajusta `USUARIO` y `CONTRASEÑA` según tu configuración de MySQL Workbench).*

### 4. Configurar la Base de Datos (Migraciones)
Ejecuta el siguiente comando para crear las tablas necesarias en tu base de datos local:

```bash
npx prisma migrate dev --name init_kuarzo_schema
```

### 5. Sembrar Datos Iniciales (Seed)
Para tener los roles básicos (`COMPRADOR`, `ADMINISTRADOR`) y otros datos iniciales:

```bash
npm run seed
```

---

## 🚀 Ejecución

### Modo Desarrollo
Para trabajar con recarga automática (*Hot Reloading*):
```bash
npm run dev
```
El servidor se iniciará en [http://localhost:3000](http://localhost:3000).

### Construcción para Producción
Para compilar a JavaScript puro:
```bash
npm run build
```
Los archivos compilados estarán en la carpeta `/dist`.

### Ejecución en Producción
```bash
npm start
```

---

## 📂 Estructura del Proyecto

* `src/config/db.ts`: Configuración del cliente Prisma y adaptador MariaDB.
* `src/controllers/`: Lógica de negocio de la API.
* `src/routes/`: Definición de los endpoints.
* `src/generated/`: Cliente de Prisma autogenerado (no editar).
* `prisma/`: Esquema de la base de datos y migraciones.

---

## 🛡️ Notas de Seguridad
* Nunca subas el archivo `.env` al repositorio público.
* Las contraseñas se gestionan usando `bcryptjs`.
* Las sesiones se manejan mediante `jsonwebtoken` (JWT).

---
© 2026 Kuarzo
