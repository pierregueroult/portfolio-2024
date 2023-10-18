import getImagesData from "@/contents/getImagesData";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  var imagesData = await getImagesData();
  const searchParams: URLSearchParams = req.nextUrl.searchParams;
  const start: string | null = searchParams.get("start");
  const end: string | null = searchParams.get("end");

  if (start && end) {
    imagesData = imagesData.slice(Number(start), Number(end));
  }

  return NextResponse.json(imagesData);
}
