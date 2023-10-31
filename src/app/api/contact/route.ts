import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma";
import htmlEntities from "@/utils/htmlentities";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({
      message: "error : Tous les champs sont obligatoires",
    });
  }

  // verify email
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    return NextResponse.json({
      error: true,
      message: "L'adresse email n'est pas valide",
    });
  }

  // secure entries before saving
  const sanitized = {
    name: htmlEntities(name),
    email: htmlEntities(email),
    message: htmlEntities(message),
  };

  try {
    await prisma.contact.create({
      data: {
        ...sanitized,
      },
    });
    return NextResponse.json({
      error: false,
      message: "Votre message a bien été envoyé",
    });
  } catch (e) {
    return NextResponse.json({
      error: true,
      message: "Une erreur est survenue, veuillez réessayer plus tard",
      details: e,
    });
  }
}
