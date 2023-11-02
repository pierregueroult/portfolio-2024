import getImagesData from "@/contents/getImagesData";
import { Photo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams: URLSearchParams = req.nextUrl.searchParams;
  const start: string | null = searchParams.get("start");
  const end: string | null = searchParams.get("end");

  if (!start || !end) return NextResponse.error();

  const images: Photo[] | null = await getImagesData();

  if (!images) return NextResponse.error();

  const imagesData: Photo[] = images.slice(Number(start), Number(end));

  return NextResponse.json(imagesData);
}
