import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma";
import { v4 as uuid } from "uuid";

import sendMail from "@/utils/sendMail";

export async function GET(req: NextRequest) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { searchParams } = new URL(req.url);
  const mail = searchParams.get("mail");

  if (!mail || !regex.test(mail)) {
    return NextResponse.json({
      message: "error",
    });
  }

  try {
    const data = await prisma.registered.create({
      data: {
        email: mail,
        verifyToken: uuid(),
      },
    });

    try {
      const s = await sendMail({
        to: mail,
        subject: "Welcome to the club!",
        html: {
          path:
            process.env.NODE_ENV === "development"
              ? `http://localhost:3000/mail/verify/${data.verifyToken}/${data.email}`
              : `https://pierregueroult.dev/mail/verify/${data.verifyToken}/${data.email}`,
        },
        text: `Si ce mail ne s'affiche pas correctement, veuillez cliquer sur ce lien : http://localhost:3000/mail/verify/${data.verifyToken}/${data.email}`,
      });

      if (!s) {
        throw new Error("mail error");
      }
    } catch (e) {
      await prisma.registered.delete({
        where: {
          id: data.id,
        },
      });
      return NextResponse.json({
        message: "mail error",
      });
    }
  } catch (e) {
    return NextResponse.json({
      message: "already",
    });
  }

  return NextResponse.json({
    message: "success",
  });
}
