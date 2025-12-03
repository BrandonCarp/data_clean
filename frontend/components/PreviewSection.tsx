"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Row } from "@/lib/types/typeHelpers";
import TableCard from "./TableCard";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
// import CheckCircleIcon from "@heroicons/react/24/outline"; - for cleaned csv

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
    <section className="mt-5 mx-5 space-y-3">
      <TableCard
        rows={rows}
        headers={headers}
        title="Original CSV"
        bgColor="bg-gradient-to-r from-yellow-400 to-orange-500"
        textColor="text-orange-text font-semibold"
        subtitle="Messy Data with inconsistencies"
        cleanedRows="Rows to be cleaned"
        heroicon={<ExclamationCircleIcon className="size-5 mr-1 " />}
        sparkles={<SparklesIcon className="size-4 mr-1 dark:text-gray-text" />}
      />
      <div className="flex justify-center">
        <button className=" bg-gray-secondary  dark:bg-gray-third text-white font-medium py-2 px-6 rounded hover:bg-gray-third cursor-pointer dark:hover:bg-gray-hover ">
          <p className="flex items-center gap-1">
            <SparklesIcon className="size-4 " /> Clean Csv
          </p>
        </button>
      </div>
      <section className="">
        <TableCard
          rows={rows}
          headers={headers}
          title="Cleaned CSV"
          bgColor="bg-gradient-to-r from-green-500 to-green-900"
          textColor="text-green-text font-semibold"
          subtitle="Cleaned Data"
          cleanedRows="Rows cleaned"
          heroicon={<CheckCircleIcon className="size-5 mr-1 " />}
          sparkles={
            <SparklesIcon className="size-4 mr-1 dark:text-gray-text" />
          }
        />
      </section>
    </section>
  );
}
