import { useState, useEffect } from "react";

type PrevButtonProps = {
  parseCsv: () => Promise<void>;
  fileName: string;
};

export default function PreviewButton({ parseCsv, fileName }: PrevButtonProps) {
  return (
   <div className="border-2 border-gray-600 border-dashed p-20 rounded-xl">
   <h1>(No preview yet)</h1>
      <button
        className="rounded-md border border-blue-800 px-1 bg-blue-900  py-3 text-sm"
        onClick={parseCsv}
      >
        Load Messy CSV
      </button>
   </div>
    
  );
}
