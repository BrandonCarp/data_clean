from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from io import StringIO
from src.cleaning import main as clean_main
from pydantic import BaseModel
from typing import Optional, List, Any, Annotated

# Pydantic model for a row of your CSV
class RowModel(BaseModel):
    col1: Optional[Any] = None
    col2: Optional[Any] = None
    

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # front end, replace when live
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# File params w. UploadFile

@app.post("/clean_csv/")
async def upload_csv(file: Annotated[bytes, File()]):
    
    try:
        contents = await file.read()
        df = pd.read_csv(StringIO(contents.decode("utf-8")))
    except Exception as e:
        return {"error": f"CSV parse failed: {e}"}

    df_clean = clean_main(df)
   
    df_clean = df_clean.where(pd.notna(df_clean), None).replace([np.inf, -np.inf], None)

   
    records = df_clean.to_dict(orient="records")

    return records






# Routes https://fastapi.tiangolo.com/tutorial/request-files/
# @app.post("/clean_csv/", response_model=List[dict[str, Any]])
# async def upload_csv(file: UploadFile = File(...)):
    
#     try:
#         contents = await file.read()
#         df = pd.read_csv(StringIO(contents.decode("utf-8")))
#     except Exception as e:
#         return {"error": f"CSV parse failed: {e}"}

#     df_clean = clean_main(df)
   
#     df_clean = df_clean.where(pd.notna(df_clean), None).replace([np.inf, -np.inf], None)

   
#     records = df_clean.to_dict(orient="records")

#     return records


@app.get("/test/") # example get request
async def test_upload():
    return {"message": "hey"}