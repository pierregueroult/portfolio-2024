import { NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import sha256 from "sha256";

export const options: NextAuthOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Nom d'utilisateur",
          type: "text",
          placeholder: "@jeanmoulin56",
        },
        password: {
          label: "Mot de passe",
          type: "password",
          placeholder: "••••••••••••••",
        },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const user = {
          id: 1,
          username: process.env.ADMIN_EMAIL!,
          password: process.env.ADMIN_SHA256_PASSWORD!,
        };

        if (
          credentials?.username === user.username &&
          sha256(credentials?.password) === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
