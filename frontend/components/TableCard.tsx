import { Row } from "@/lib/types/typeHelpers";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

type CsvTableProps = {
  rows: Row[];
  headers: string[];
  bgColor?: string; 
  textColor?: string;
};


export default function TableCard({ rows, headers }: CsvTableProps) {
  return (
    <div className="relative overflow-x-auto rounded-xl border border-gray-300">
      {/* 👇 this wrapper controls the scroll width */}
      <div className="min-w-max">
        {/* orange banner */}
        <div className="w-full bg-orange-50 border-b border-gray-300 px-2 py-2 text-sm">
          <div className="flex">
            <h1 className="flex items-center gap-2 text-lg text-amber-900">
              {/* change to check mark as prop */}
              <ExclamationCircleIcon className="size-6 text-amber-600" />
              Original CSV
            </h1>
          </div>
          <h2 className="p-1 text-amber-800">
            Messy data with inconsistencies
          </h2>
        </div>

        {/* table now shares the same width */}
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((h) => (
                <th className="px-5 py-3 font-medium" key={h}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-b border-gray-300">
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
  );
}

