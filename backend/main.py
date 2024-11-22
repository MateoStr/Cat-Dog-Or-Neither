from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}



@app.post("/ping")
def post_ping():
    return {"message": "Ping!"}

