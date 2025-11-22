import { Row } from "@/lib/types/typeHelpers";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
type CsvTableProps = {
  rows: Row[];
  headers: string[]; 
};

export default function TableCard({ rows, headers }: CsvTableProps) {
  return (
    <div className="relative overflow-x-auto border rounded-xl ">
      <div>
        <h1></h1>
      </div>
      <table className=" text-sm text-left ">
        <thead className="  ">
          <tr className="">
            
            {headers.map((h) => (
            <th className="px-6 py-3 font-medium bg-gray-100 " key={h}>
              {h}
              </th>
              ))}
          </tr>
        </thead>
        <tbody className=" border-b border-default">
          {rows.slice(0, 5).map((row, i) => (
            <tr className="whitespace-nowrap" key={i}>
              {headers.map((h) => (
                <td className=" px-6 py-4 border-t" key={h}>{String(row[h] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// p-4 border-b border-blue-gray-100 bg-blue-gray-50