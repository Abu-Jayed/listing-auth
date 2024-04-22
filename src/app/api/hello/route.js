import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return new NextResponse(JSON.stringify({ post: "aj test" }), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Error", { status: 500 });
  }
};
