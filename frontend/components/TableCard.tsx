import { Row } from "@/lib/types/typeHelpers";

type CsvTableProps = {
  rows: Row[];
  headers: string[];
};

export default function TableCard({ rows, headers }: CsvTableProps) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th className="" key={h}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 5).map((row, i) => (
            <tr className="" key={i}>
              {headers.map((h) => (
                <td key={h}>{String(row[h] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
