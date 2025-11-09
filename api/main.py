from fastapi import FastAPI, File, UploadFile

app = FastAPI()

# the api will recieve the csv pass it to cleaning.py 
# and cleaning will return the cleaned csv which we will then 
# pass into viz.py to plot and send back to the frontend

@app.get("/")
async def main():
    return {"message": "Doo doo doo doo"}




@app.post("/upload_csv/")
async def upload_csv(file: UploadFile = File(...)):
    contents = await File.read()
    # process CSV here
    return {"filename": File.filename, "size": len(contents)}