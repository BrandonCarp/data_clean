"use client";

async function cleanData(messyCsv: string) {
  const blob = new Blob([messyCsv], { type: "text/csv" });
  const file = new File([blob], "messy.csv", { type: "text/csv" });

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:8000/clean_csv/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to clean CSV");

  const data = await response.json();
  return { rows: data };
}

export default cleanData;
