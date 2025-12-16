import { NextResponse } from "next/server"

async function file(formData: FormData) {
  "use server";
  const file = formData.get("file") as File;
  console.log("File name:", file.name, "size", file.size);
}

export default async function uploadCsv() {
  return (
   
     <form action={file}>
      <label htmlFor="file">
      <input type="file" name="file">
      <button type="submit">
        </button>CSV UPLOAD</input>
      </label>
    </form>
    
  )
}