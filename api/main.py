from fastapi import FastAPI, UploadFile, File
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from io import StringIO
from src.cleaning import main as clean_main



app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.post("/clean_csv/")
async def upload_csv(file: UploadFile = File(...)):
    
    contents = await file.read()
    df = pd.read_csv(StringIO(contents.decode("utf-8")))
    

    df_clean = clean_main(df)

    
    df_clean = df_clean.replace([np.inf, -np.inf], np.nan)

 
    df_clean = df_clean.astype(object)


    df_clean = df_clean.where(pd.notna(df_clean), None)

   
    records = df_clean.to_dict(orient="records")
    return records





@app.get("/") # example get request
async def test_upload():
    return {"message": "Hey were making a fastapi !"}