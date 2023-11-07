import { createTransport, Transporter } from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async (): Promise<Transporter | Error> => {
  try {
    const oauth2Client = new OAuth2(
      process.env.TRANSPORT_CLIENT_ID,
      process.env.TRANSPORT_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.TRANSPORT_REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject();
        }
        resolve(token);
      });
    });

    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.TRANSPORT_EMAIL!,
        accessToken: accessToken as string,
        clientId: process.env.TRANSPORT_CLIENT_ID!,
        clientSecret: process.env.TRANSPORT_CLIENT_SECRET!,
        refreshToken: process.env.TRANSPORT_REFRESH_TOKEN!,
      },
    });

    return transporter;
  } catch (error: any) {
    throw new Error(`Error creating transporter: ${error.message}`, error);
  }
};

export default createTransporter;
