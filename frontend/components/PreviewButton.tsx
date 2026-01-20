import { useState, useEffect } from "react";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";


type PrevButtonProps = {
  parseCsv: () => Promise<void>;
  fileName: string;
};
// @theme {
//   --color-gray-bg: #0f0f0fff;
//   --color-gray-secondary: #1a1919ff;
//   --color-gray-third: #242323ff;
// --color-gray-hover: #363535ff;
//   --color-gray-text: #b3afafff;
//   --color-purple-main: #7f20f3ff;
//   --color-purple-light: #8d33faff;
//   --color-orange-main: #f3b43fff;
//   --color-orange-secondary: #f08344ff;
//   --color-orange-text: #7c3b10ff;
// --color-green-text: #155a07ff;
// }
export default function PreviewButton({ parseCsv, fileName }: PrevButtonProps) {
  return (
   <div className="border-2  border-dashed border-gray-300 p-20 rounded-xl flex flex-col items-center text-center dark:bg-gray-third dark:border-gray-secondary">
    <FolderArrowDownIcon className="size-10 text-gray-300  dark:text-gray-secondary" />
   
      <button
        className="rounded-md mt-5 py-3 px-1 text-sm font-semibold bg-gray-300   border-gray-hover hover:bg-gray-hover  dark:bg-gray-secondary"
        onClick={parseCsv}
      >
        Preview Messy CSV
      </button>
   </div>
    
  );
}
