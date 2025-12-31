import { useState, useEffect } from "react";

type PrevButtonProps = {
  parseCsv: () => Promise<void>;
  fileName: string;
};

export default function PreviewButton({ parseCsv, fileName }: PrevButtonProps) {
  return (
    <div>
      <button
        className="bg-white text-black rounded px-2 cursor-pointer my-2"
        onClick={parseCsv}
      >
        {fileName}
      </button>
    </div>
  );
}
