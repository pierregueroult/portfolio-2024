import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  const data = await prisma.registered.findUnique({
    where: {
      verifyToken: token,
    },
  });

  if (!data) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  await prisma.registered.update({
    where: {
      id: data.id,
    },
    data: {
      verified: true,
    },
  });

  const url = new URL("/", req.url);
  return NextResponse.redirect(url);
}
