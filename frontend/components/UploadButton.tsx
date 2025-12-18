"use client";
import { useId, useState } from "react";

type UploadResponse =
  | { ok: true; filename: string; size: number }
  | { ok: false; error: string };

export default function UploadButton() {
  const inputId = useId();
  const [note, setNote] = useState<string>("");
  const [chosenName, setChosenName] = useState<string>("No file chosen");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Uploading....");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data: UploadResponse | null = await res.json().catch(() => null);

    if (!res.ok) {
      setNote(
        `Error ${res.status}: ${
          data && "error" in data ? data.error : "Upload failed"
        }`
      );
      return;
    }

    if (!data || !("ok" in data) || !data.ok) {
      setNote("Upload success, response unexpected");
      return;
    }

    setNote(`Uploaded: ${data.filename} (${data.size} bytes)`);
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-2">
      {/* real input is hidden but still works with FormData */}
      <input
        id={inputId}
        type="file"
        name="file"
        accept=".csv,text/csv"
        required
        className="sr-only"
        onChange={(e) => {
          const file = e.currentTarget.files?.[0];
          setChosenName(file ? file.name : "No file chosen");
        }}
      />

      {/* custom UI that looks like your screenshot */}
      <label
        htmlFor={inputId}
        className="
          flex w-full items-center overflow-hidden
          rounded-lg border border-slate-600
          bg-slate-800 text-slate-200
          cursor-pointer select-none
          focus-within:ring-2 focus-within:ring-sky-500
        "
      >
        <span
          className="
            shrink-0 px-4 py-2
            bg-slate-700 text-slate-100
            border-r border-slate-600
          "
        >
          Choose File
        </span>

        <span className="px-4 py-2 text-sm text-slate-300 truncate">
          {chosenName}
        </span>
      </label>

      <button type="submit" className="rounded-md border border-slate-600 px-3 py-2 text-sm">
        Upload Csv
      </button>

      <p>{note}</p>
    </form>
  );
}
