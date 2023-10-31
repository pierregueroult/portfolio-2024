import createTransporter from "./mailTransporter";
import nodemailer from "nodemailer";
import fs from "node:fs";

type sendMailParams = {
  to: string;
  subject: string;
  text?: string;
  // prettier-ignore : html can be string or { path: string }
  html?: string | { path: string };
};

async function sendMail(params: sendMailParams): Promise<boolean> {
  try {
    var mailOptions = {
      ...params,
      from: `🤖 de pierregueroult.dev  <${process.env.TRANSPORT_EMAIL!}>`,
    } as nodemailer.SendMailOptions;

    let transporter = await createTransporter();

    if (transporter instanceof Error) {
      throw transporter;
    }

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    return false;
  }
}

export default sendMail;
