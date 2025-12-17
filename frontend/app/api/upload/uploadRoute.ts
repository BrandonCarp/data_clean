import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const value = formData.get("file");

  if (!(value instanceof File)) {
    return NextResponse.json({ error: "No csv uploaded sir" }, { status: 400 });
  }

  if (!value.name.toLowerCase().endsWith(".csv")) {
    return NextResponse.json({ error: "CSV Files only" }, { status: 400 });
  }

  const csvText = await value.text();

  return NextResponse.json({
    ok: true,
    filename: value.name,
    size: value.size,
  });
}
