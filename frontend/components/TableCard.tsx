"use client";
import { useState } from "react";
import { Row } from "@/lib/types/typeHelpers";
import {
  ExclamationCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode, SVGProps } from "react";

type CsvTableProps = {
  rows: Row[];
  headers: string[];
  bgColor: string;
  bdColor: string;
  textColor?: string;
  cleanedRows: string;
  heroicon?: React.ReactNode;
  sparkles?: React.ReactNode;
  title: string;
  subtitle?: string;
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

export default function TableCard({
  rows,
  headers,
  bgColor,
  bdColor,
  textColor,
  cleanedRows,
  heroicon,
  sparkles,
  title,
  subtitle,
}: CsvTableProps) {
  const rowLength: number = rows.length;
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative overflow-hidden   rounded-xl border border-gray-300 dark:border-none  dark:border-gray-third my-3">
      <div
        className={`w-full ${bgColor} ${bdColor} rounded-t-xl px-2 py-2 text-sm`}
      >
        <div className="flex ">
          <h1 className={`flex items-center  text-lg  ${textColor}`}>
            {heroicon}
            {title}
          </h1>
        </div>
        {subtitle && <h2 className={`p-1 ${textColor}`}>{subtitle}</h2>}
      </div>
      <div className="overflow-x-scroll">
        <div className="min-w-max">
          <table className="min-w-full text-left text-sm  dark:bg-gray-secondary bg-gray-50">
            <thead className="">
              <tr className="bg-gray-100 dark:bg-gray-third ">
                {headers.map((h) => (
                  <th className="px-5 py-3 font-medium text-yellow-200" key={h}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {rows.slice(0, 5).map((row, i) => (
                <tr
                  className="whitespace-nowrap dark:hover:bg-gray-third"
                  key={i}
                >
                  {headers.map((h) => (
                    <td
                      className="border-t border-gray-300 dark:border-gray-bg px-6 py-4  dark:text-gray-text "
                      key={h}
                    >
                      {String(row[h] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full  px-2 py-2 text-sm dark:text-gray-text  dark:bg-gray-third border-t border-gray-200 dark:border-gray-bg ">
        <div className="flex justify-between">
          <h1 className="flex items-center">
            {sparkles}
            {cleanedRows}
          </h1>
          <h1 className=" font-semibold">{rowLength}</h1>
        </div>
      </div>
    </div>
  );
}
