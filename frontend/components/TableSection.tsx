"use client";
import { useState } from "react";
import PreviewButton from "./PreviewButton";
import TableCard from "./TableCard";
import { Row } from "@/lib/types/typeHelpers";

export default function TableSection() {
  const [tableLoad, setTableLoad] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  async function loadCsv() {
    const res = await fetch("/data/raw_orders.csv");
    const text = await res.text();
    return text;
  }
  return (
    <div>
      TableSection
      <section>
        {/* Preview Section */}
        <PreviewButton loadCsv={loadCsv} />
        <TableCard />
      </section>
    </div>
  );
}
