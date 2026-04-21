# Application Documentation

This project consists of a full-stack application with a **FastAPI backend** (Python) and a **React frontend** powered by **Vite** (TypeScript).

Here is how you can run the application, either via Docker (recommended) or locally on your machine.

## Prerequisites

- **Docker** and **Docker Compose** (for Docker setup)
- **Node.js** (v18+ recommended) and `npm` (for local frontend setup)
- **Python** 3.9+ (for local backend setup)

---

## Method 1: Running with Docker (Recommended)

Running the application with Docker is the easiest method and ensures that all dependencies are isolated.

1. **Open your terminal** and navigate to the root directory `src/` (where the `docker-compose.yml` file is located).
2. **Run the containers** using Docker Compose:
   ```bash
   docker-compose up --build
   ```
   *(Add `-d` at the end to run it in detached mode / in the background)*
3. **Access the application:**
   - **Frontend:** http://localhost:5173
   - **Backend API:** http://localhost:8000
   - **Backend Interactive Docs (Swagger UI):** http://localhost:8000/docs

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
2. **Create a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Linux/macOS
   # On Windows run: venv\Scripts\activate
   ```
3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Start the backend server:**
   ```bash
   fastapi dev app/main.py
   ```
   *The backend server will be running on `http://localhost:8000`.*

### 2. Running the React Frontend

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
   *The frontend application will be visible on `http://localhost:5173`.*

---

## Troubleshooting

- **Ports already in use:** If port `5173` or `8000` are already in use by another application, you'll need to stop the conflicting service, or adjust the port mappings inside the `docker-compose.yml` file.
- **Permission errors with volumes (Docker):** Ensure you have sufficient permissions over the current directory, or try prefixing commands with `sudo` if on Linux.
