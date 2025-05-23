import prisma from "@/utils/prisma";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required!");
        }

        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("Account is not registered yet!");
        }

        if (user?.password) {
          if (!user || !(await compare(credentials.password, user?.password))) {
            throw new Error("Email or Password isn't correct!");
          }
        }

        return { id: user.id, name: user.userName, email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account?.provider === "google" || "facebook") {
        const email = token?.email ?? profile?.email;

        const existingUser = await prisma.users.findUnique({
          where: {
            email,
          },
        });

        if (!existingUser && profile?.email) {
          const newUser = await prisma.users.create({
            data: {
              email: profile?.email,
              userName: profile?.name || profile?.email?.split("@")[0],
            },
          });

          token.id = newUser.id;
        } else {
          token.id = existingUser?.id;
        }
      }
      
      if (user) {
        token.id = user.id ?? profile?.sub;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
