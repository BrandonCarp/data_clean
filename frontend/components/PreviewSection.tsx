"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Row } from "@/lib/types/typeHelpers";
import TableCard from "./TableCard";

// async load func fetch csv , await res.text return text
// useState rows, headers, loading
// in useEffect call load csv, Papa.parse<Row>(text, { header: skipEmptyLines}) result data +  set rows/headers

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
    <section className="m-3">
      <TableCard rows={rows} headers={headers} />
    </section>
  );
}
