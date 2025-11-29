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
//     light: "#242323ff",
//     lightest: "#dbd5d5ff",
// 
//   },
//   purple: {
//     main: "#7f20f3ff",
//     light: "#8d33faff",
//   },
//   orange: {
//     main: "#f8de97e8",
//     textdark: "#f08344ff"
//     textlight: "#f7853aff"
//   },

export default function TableCard({
  rows,
  headers,
  bgColor = `bg-orange-main`,
  textColor = "text-amber-900",
  heroicon,
  title,
  subtitle,
}: CsvTableProps) {
  return (
    <div className="relative overflow-hidden  rounded-xl border  border-gray-dark">
      <div
        className={`w-full ${bgColor} border-b border-gray-light  px-2 py-2 text-sm`}
      >
        <div className="flex">
          <h1 className={`flex items-center  text-lg ${textColor}`}>
            {heroicon}
            {title}
          </h1>
        </div>
        {subtitle && <h2 className={`p-1 ${textColor}`}>{subtitle}</h2>}
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="min-w-full text-left text-sm  dark:bg-gray-light bg-gray-100">
            <thead className="">
              <tr className="bg-gray-300 dark:bg-gray-dark ">
                {headers.map((h) => (
                  <th className="px-5 py-3 font-medium dark:text-gray-lightest" key={h}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-b ">
              {rows.slice(0, 5).map((row, i) => (
                <tr className="whitespace-nowrap" key={i}>
                  {headers.map((h) => (
                    <td className="border-t border-gray-darkest px-6 py-4" key={h}>
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
