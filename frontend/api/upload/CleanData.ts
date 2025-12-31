"use client";

async function CleanData() {
  const res = fetch("http://127.0.0.1:8000/clean_csv/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}

export default CleanData();
