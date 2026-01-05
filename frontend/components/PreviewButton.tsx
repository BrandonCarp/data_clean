import { useState, useEffect } from "react";

type PrevButtonProps = {
  parseCsv: () => Promise<void>;
  fileName: string;
};

export default function PreviewButton({ parseCsv, fileName }: PrevButtonProps) {
  return (
    <div>
      <button
        className="rounded-md border border-slate-600 px-3 py-2 text-sm"
        onClick={parseCsv}
      >
        {fileName}
      </button>
    </div>
  );
}
