from fastapi import FastAPI

app = FastAPI(title="Mildas Helper")

@app.get("/")
def read_root():
    return { "message": "Backend is running!"}