"use client";
import { useState } from "react";
import Papa from "papaparse";
import PreviewButton from "./PreviewButton";
import TableCard from "./TableCard";
import { Row } from "@/lib/types/typeHelpers";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function TableSection() {
  const [prevTableLoad, setPrevTableLoad] = useState(true);
  const [rows, setRows] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  async function fetchCsv() {
    const res = await fetch("/testData/messyTest.csv");
    const text = await res.text();
    return text;
  }

  async function parseCsv() {
    try {
      const text = await fetchCsv();

      const result = Papa.parse<Row>(text, {
        header: true,
        skipEmptyLines: true,
      });

      const data = result.data || [];
      setRows(data);
      setHeaders(Object.keys(data[0] || {}));
    } catch (err) {
      console.error("Failed to load CSV", err);
    } finally {
      setPrevTableLoad(false);
    }
  }
  return (
    <div className=" mx-5">
      TableSection
      <section className="">
        {/* Preview Section */}
        <PreviewButton parseCsv={parseCsv} />
        {/* {prevTableLoad ? (
          <div>Preview Section</div>
        ) : (
          <TableCard
            rows={rows}
            headers={headers}
            title="Original CSV"
            bgColor="bg-amber-100"
            bdColor="border border-amber-700"
            textColor="text-amber-800 font-semibold"
            subtitle="Messy Data with inconsistencies"
            cleanedRows="Rows to be cleaned"
            heroicon={<ExclamationCircleIcon className="size-5 mr-1 " />}
            sparkles={
              <SparklesIcon className="size-4 mr-1 dark:text-gray-text" />
            }
          />
        )} */}
        <div className="space-y-10 mb-5">
          <TableCard
            rows={rows}
            headers={headers}
            title="Messy CSV"
            bgColor="bg-amber-100"
            bdColor="border border-amber-700"
            textColor="text-amber-800 font-semibold"
            subtitle="Messy Data with inconsistencies"
            cleanedRows="Rows to be cleaned"
            heroicon={<ExclamationCircleIcon className="size-5 mr-1 " />}
            sparkles={
              <SparklesIcon className="size-4 mr-1 dark:text-gray-text" />
            }
          />
          <TableCard
            rows={rows}
            headers={headers}
            title="Cleaned CSV"
            bgColor="bg-emerald-200"
            bdColor="border border-emerald-500"
            textColor="text-emerald-900 font-semibold"
            subtitle="Cleaned Data"
            cleanedRows="Rows cleaned"
            heroicon={<CheckCircleIcon className="size-5 mr-1 " />}
            sparkles={
              <SparklesIcon className="size-4 mr-1 dark:text-gray-text" />
            }
          />
        </div>
      </section>
    </div>
  );
}
