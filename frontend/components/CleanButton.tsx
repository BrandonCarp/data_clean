import React from "react";
import cleanData from "../api/upload/CleanData";
import { Row } from "@/lib/types/typeHelpers";

interface CleanButtonProps {
  messyCsv: string | undefined;
  setCleanedRows: React.Dispatch<React.SetStateAction<Row[]>>;
  setCleanedHeaders: React.Dispatch<React.SetStateAction<string[]>>;
  setCleanTableLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CleanButton({
  messyCsv,
  setCleanedRows,
  setCleanedHeaders,
  setCleanTableLoad,
}: CleanButtonProps) {
  async function handleClean() {
    if (!messyCsv) return;

    try {
      const cleaned = await cleanData(messyCsv);

      if (cleaned?.rows) {
        setCleanedRows(cleaned.rows);
        setCleanedHeaders(Object.keys(cleaned.rows[0] || {}));
        setCleanTableLoad(false);
      }
    } catch (err) {
      console.error("Error cleaning CSV:", err);
    }
  }

  return (
    <button
      onClick={handleClean}
      className="rounded-md border border-slate-600 px-3 py-2 text-sm"
    >
      Clean CSV
    </button>
  );
}
