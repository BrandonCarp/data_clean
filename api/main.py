from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from io import StringIO
from src.cleaning import main as clean_main


app = FastAPI()

#  CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # front end, replace when live
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes--!
@app.post("/clean_csv/")
async def upload_csv(file: UploadFile = File(...)):
    if file.content_type not in {"text/csv", "application/vnd.ms-excel"}:
        return JSONResponse(status_code=400, content={"error": "CSV file required"})
    try:
        contents = await file.read()
        df = pd.read_csv(StringIO(contents.decode("utf-8")))
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"CSV parse failed: {e}"})

      
    df_clean = clean_main(df)
    return JSONResponse(content={"data": df_clean.to_dict(orient="records")})


# @app.get("/csv/") # example get request
# async def csv_upload():
#     return {"message": "hey"}