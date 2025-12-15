import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./lib/services/auth.service";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const payload = await loginService({
          email: credentials!.email,
          password: credentials!.password,
        });

        if ("code" in payload) {
          throw new Error(payload.message);
        }

        return {
          id: payload.user._id,
          accessToken: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      //   if (profile) {
      //     token.accessToken = account?.access_token || "";
      //     token.user = {
      //       _id: profile?.sub || "",
      //       username: profile?.name || "",
      //       firstName: profile?.name || "",
      //       lastName: profile?.name || "",
      //     };
      //   }
      return token;
    },
    session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
};
