"use client";
import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export default function UploadButton() {
  const [note, setNote] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Uploading....");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/upload/uploadRoute", {
      method: "POST",
      body: formData,
    });

    const data: any = await res.json().catch(() => null);

    if (!res.ok) {
      setNote(`Error ${res.status}: ${data?.error ?? "Upload failed"}`);
      return;
    }

    setNote(`Uploaded: ${data.filename} (${data.size} bytes)`);
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <input type="file" name="file" accept=".csv,text/csv" required />
      <button type="submit">Upload Csv</button>
      <p>{note}</p>
    </form>
  );
}
