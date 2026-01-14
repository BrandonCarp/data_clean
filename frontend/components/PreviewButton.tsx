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
   <div className="border-2 border-gray-secondary border-dashed p-20 rounded-xl flex flex-col items-center text-center bg-gray-third">
    <FolderArrowDownIcon className="size-10  dark:text-gray-secondary" />
   
      <button
        className="rounded-md  bg-gray-secondary border-gray-hover hover:bg-gray-hover mt-5 py-3 px-1 text-sm font-semibold"
        onClick={parseCsv}
      >
        Preview Messy CSV
      </button>
   </div>
    
  );
}
