import { NextResponse, type NextRequest } from "next/server";
// types
import type { SearchResults, SearchResult } from "@/types/SearchResult";
import { Article, Photo, Project, Legal } from "@prisma/client";
// prisma
import prisma from "../../../../prisma";
// contents
import getLinks from "@/contents/getLinks";
// utils
import { v4 as uuid } from "uuid";

export async function GET(req: NextRequest) {
  const searchParams: URLSearchParams = req.nextUrl.searchParams;
  const search = searchParams.get("q");

  if (!search) return NextResponse.error();

  let startTime = Date.now();

  // const photoResults: Photo[] = await prisma.photo.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: search,
  //           mode: "insensitive",
  //         },
  //       },
  //       {
  //         description: {
  //           contains: search,
  //           mode: "insensitive",
  //         },
  //       },
  //       {
  //         device: {
  //           contains: search,
  //           mode: "insensitive",
  //         },
  //       },
  //     ],
  //   },
  // });

  const linkResults = getLinks().filter(link =>
    link.name.toLowerCase().includes(search.toLowerCase()),
  );

  const projectResults: Project[] = await prisma.project.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          type: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const articleResults: Article[] = await prisma.article.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          tags: {
            has: search,
          },
        },
      ],
    },
  });

  const legalResults: Legal[] = await prisma.legal.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          slug: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const results: SearchResults = [
    ...linkResults.map(
      link =>
        ({
          id: uuid(),
          title: link.name,
          type: "link",
          url: link.href,
        } as SearchResult),
    ),
    // ...photoResults.map(
    //   (photo: Photo) =>
    //     ({
    //       id: photo.id,
    //       title: photo.title,
    //       type: "photo",
    //       url: `/gallery/${photo.id}`
    //     } as SearchResult),
    // ),
    ...projectResults.map(
      (project: Project) =>
        ({
          id: project.id,
          title: project.title,
          type: project.type,
          url: `/projects/${project.id}`,
        } as SearchResult),
    ),
    ...articleResults.map(
      (article: Article) =>
        ({
          id: article.id,
          title: article.title,
          type: "article",
          url: `/blog/${article.id}`,
        } as SearchResult),
    ),
    ...legalResults.map(
      (legal: Legal) =>
        ({
          id: legal.id,
          title: legal.title,
          type: "legal",
          url: `/legals/${legal.slug}`,
        } as SearchResult),
    ),
  ];

  const time = Date.now() - startTime;

  return NextResponse.json({
    results,
    time,
  });
}
