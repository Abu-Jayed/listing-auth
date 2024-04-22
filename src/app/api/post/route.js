import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  console.log(result);
  return NextResponse.json({ result });
}
