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
      className="px-4 py-5 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Clean CSV
    </button>
  );
}
