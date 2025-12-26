import { useState, useEffect } from "react";

type PrevButtonProps = {
  parseCsv: () => Promise<void>;
};

export default function PreviewButton({ parseCsv }: PrevButtonProps) {
  const [fileName, setFileName] = useState<string>("Load Messy CSV");

  useEffect(() => {
    async () => {
      try {
      } finally {
      }
    };
  }, []);
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
