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

  if (loading) return <div>Loading sample messy CSV…</div>;

  return (
    <section>
      <h2>Example messy CSV (preview)</h2>
      <p>This is a small slice of the raw file before cleaning.</p>

      <table className="border-separate border-spacing-x-4 overflow-x-auto">
        <thead className="bg-white text-black space-x-10">
          <tr className="">
            {headers.map((h) => (
              <th className="" key={h}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 5).map((row, i) => (
            <tr key={i}>
              {headers.map((h) => (
                <td key={h}>{String(row[h] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
