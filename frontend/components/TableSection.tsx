"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import PreviewButton from "./PreviewButton";
import TableCard from "./TableCard";
import { Row } from "@/lib/types/typeHelpers";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import CleanData from "../api/upload/CleanData";
import CleanButton from "./CleanButton";

export default function TableSection() {
  const [prevTableLoad, setPrevTableLoad] = useState(true);
  const [cleanTableLoad, setCleanTableLoad] = useState(true);
  const [rows, setRows] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("Load Messy CSV");
  const [messyCsv, setMessyCsv] = useState<string>();
  const [cleanedRows, setCleanedRows] = useState<Row[]>([]);
  const [cleanedHeaders, setCleanedHeaders] = useState<string[]>([]);

  async function fetchCsv() {
    const path = "/data/raw_orders.csv";
    const res = await fetch(path);
    const text = await res.text();

    setMessyCsv(text);
    setFileName(path.split("/").pop()!);

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
      <section className="">
        {/* Preview Section */}

        {prevTableLoad ? (
          <div>
            Preview Section
            <PreviewButton parseCsv={parseCsv} fileName={fileName} />
          </div>
        ) : (
          <div>
            <TableCard
              rows={rows}
              headers={headers}
              title={fileName}
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
            {cleanTableLoad ? (
              <CleanButton
                messyCsv={messyCsv}
                setCleanedRows={setCleanedRows}
                setCleanedHeaders={setCleanedHeaders}
                setCleanTableLoad={setCleanTableLoad}
              />
            ) : (
              <section className="my-5">
                <TableCard
                  rows={cleanedRows}
                  headers={cleanedHeaders}
                  title={fileName}
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
              </section>
            )}
          </div>
        )}
      </section>
      {/* {cleanTableLoad ? (
        <CleanButton
          messyCsv={messyCsv}
          setCleanedRows={setCleanedRows}
          setCleanedHeaders={setCleanedHeaders}
          setCleanTableLoad={setCleanTableLoad}
        />
      ) : (
        <section className="my-5">
          <TableCard
            rows={cleanedRows}
            headers={cleanedHeaders}
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
        </section>
      )} */}
    </div>
  );
}
