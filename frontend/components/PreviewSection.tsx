"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";

type Row = Record<string, string | number | null>;

async function loadCsv() {
  const res = await fetch("/data/raw_orders.csv");
  const text = await res.text();
  return text;
}

export default function CsvPreview() {
  const [rows, setRows] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const text = await loadCsv();

        const result = Papa.parse<Row>(text, {
          header: true,
          skipEmptyLines: true,
        });

        const data = result.data || [];
        setRows(data);
        setHeaders(Object.keys(data[0] || {}));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading messy CSV…</div>;


  return (
  <section className="mt-10 flex flex-col gap-2 px-5">
    <h2 className="ml-2 text-sm font-semibold text-slate-100">
      Messy CSV Preview
    </h2>

    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        {/* outer card */}
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
          <table className="min-w-full border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-slate-100 border-b border-slate-700"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {rows.slice(0, 5).map((row, i) => (
                <tr
                  key={i}
                  className="bg-slate-800 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/80"
                >
                  {headers.map((h) => (
                    <td key={h} className="px-4 py-3 whitespace-nowrap">
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
  </section>
);
}
