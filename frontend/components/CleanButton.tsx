import { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

type PrevButtonProps = {
  parseCsv: () => Promise<void>;
  fileName: string;
};

export default function CleanButton({ parseCsv, fileName }: PrevButtonProps) {
  return (
    <div>
      <button className=" bg-gray-bg dark:bg-gray-third text-white font-medium py-2 px-6 rounded hover:bg-gray-third cursor-pointer dark:hover:bg-gray-hover ">
        <p className="flex items-center gap-1">
          <SparklesIcon className="size-4 " /> Clean Csv
        </p>
      </button>
    </div>
  );
}
