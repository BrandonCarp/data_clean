import { Row } from "@/lib/types/typeHelpers";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { ReactNode, SVGProps } from "react";

type CsvTableProps = {
  rows: Row[];
  headers: string[];
  bgColor?: string;
  textColor?: string;
  heroicon?: React.ReactNode;
  title: string;
  subtitle?: string;
};

// colors: {
//   gray: {
//     darkest: "#0f0f0fff",
//     dark: "#1a1919ff",
//     light: "#DADADA",
//     lightest: "#F5F5F5",
// 
//   },
//   purple: {
//     main: "#B582F4",
//   },
//   orange: {
//     main: "#5a3401ff",
//     textdark: "#bd5519ff"
//     textlight: "#f7853aff"
//   },

export default function TableCard({
  rows,
  headers,
  bgColor = "bg-orange-50",
  textColor = "text-amber-900",
  heroicon,
  title,
  subtitle,
}: CsvTableProps) {
  return (
    <div className="relative overflow-hidden  rounded-xl border  border-gray-dark">
      <div
        className={`w-full ${bgColor} border-b border-gray- px-2 py-2 text-sm`}
      >
        <div className="flex">
          <h1 className={`flex items-center gap-2 text-lg ${textColor}`}>
            {heroicon}
            {title}
          </h1>
        </div>
        {subtitle && <h2 className={`p-1 ${textColor}`}>{subtitle}</h2>}
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="min-w-full text-left text-sm dark: bg-gray-50 dark:bg-slate-900">
            <thead className="bg-gray-300 dark:text-black">
              <tr>
                {headers.map((h) => (
                  <th className="px-5 py-3 font-medium" key={h}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-b border-gray-dark">
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
