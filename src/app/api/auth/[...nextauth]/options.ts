import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
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
      async authorize(credentials, req) {
        return null;
      },
    }),
  ],
};
