# Application Documentation

This project consists of a full-stack application with a **Nestjs backend** (Node) and a **Vue frontend** powered by **Vite** (TypeScript).

Here is how you can run the application, either via Docker (recommended) or locally on your machine.

## Prerequisites

- **Docker** and **Docker Compose** (for Docker setup)
- **Node.js** (v18+ recommended) and `npm` (for local frontend setup)

---

## Method 1: Running with Docker (Recommended)

Running the application with Docker is the easiest method and ensures that all dependencies are isolated.

1. **Open your terminal** and navigate to the root directory `src/` (where the `docker-compose.yml` file is located).
2. **Run the containers** using Docker Compose:
   ```bash
   docker-compose up --build
   ```
   _(Add `-d` at the end to run it in detached mode / in the background)_
3. **Access the application:**
   - **Frontend:** http://localhost:5173
   - **Backend API:** http://localhost:3000

To stop the containers, use `Ctrl+C` (if running in the foreground), or run:

```bash
docker-compose down
```

---

## Method 2: Running Locally (Without Docker)

to run the applications locally without Docker, follow these steps:

### 1. Running the FastAPI Backend

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Start the backend server:**
   ```bash
   npm run start:dev
   # or
   npm run start:prod
   ```
   _The backend server will be running on `http://localhost:3000`._

### 2. Running the Vue Frontend

1. **Open a new terminal session** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. **Install all frontend dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   _The frontend application will be visible on `http://localhost:5173`._

---

## Troubleshooting

- **Ports already in use:** If port `5173` or `3000` are already in use by another application, you'll need to stop the conflicting service, or adjust the port mappings inside the `docker-compose.yml` file.
- **Permission errors with volumes (Docker):** Ensure you have sufficient permissions over the current directory, or try prefixing commands with `sudo` if on Linux.
