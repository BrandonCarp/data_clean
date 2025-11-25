import { Row } from "@/lib/types/typeHelpers";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { SVGProps } from "react";

type CsvTableProps = {
  rows: Row[];
  headers: string[];
  bgColor?: string; 
  textColor?: string;
  heroicon?: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export default function TableCard({ rows, headers, bgColor, textColor }: CsvTableProps) {
  return (
    <div className="relativ overflow-hidden  rounded-xl border border-gray-300">
        <div className={`w-full ${bgColor} border-b border-gray-300  px-2 py-2 text-sm`}>
          <div className="flex">
            <h1 className={`flex items-center gap-2 text-lg ${textColor}`}>
              {/* change to check mark as prop */}
              <`${heroicon}` className="size-6 text-amber-900" />
              Original CSV
            </h1>
          </div>
          <h2 className={`p-1 ${textColor}`}>
            Messy data with inconsistencies
          </h2>
        </div>
       <div className="overflow-x-auto">
         <div className="min-w-max">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-300 dark:text-black">
            <tr>
              {headers.map((h) => (
                <th className="px-5 py-3 font-medium" key={h}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-b border-gray-400">
            {rows.slice(0, 5).map((row, i) => (
              <tr className="whitespace-nowrap" key={i}>
                {headers.map((h) => (
                  <td className="border-t border-gray-300 px-6 py-4" key={h}>
                    {String(row[h] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </div>
    </div>
  );
}

