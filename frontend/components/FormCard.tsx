"use client";
import { useEffect, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
//  const [rows, setRows] = useState<Row[]>([]);
//   const [headers, setHeaders] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const text = await loadCsv();

//         const result = Papa.parse<Row>(text, {
//           header: true,
//           skipEmptyLines: true,
//         });

//         const data = result.data || [];
//         setRows(data);
//         setHeaders(Object.keys(data[0] || {}));
//       } catch (err) {
//         console.error("Failed to load/parse CSV", err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);
// Style this
export const FormCard = () => {
  return (
    <div className="">
      <label className="block mb-2.5 text-sm font-medium text-heading">Upload file</label>
     <input className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file" />
    </div>
  );
};

{
  /* <label class="block mb-2.5 text-sm font-medium text-heading" for="file_input">Upload file</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file"> */
}
