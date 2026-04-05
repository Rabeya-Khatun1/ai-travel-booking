import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock validation: success if password matches "demo123" OR email is demo@travelai.com
        if (
          credentials?.email === "demo@travelai.com" || 
          credentials?.password === "demo123"
        ) {
          return { id: "1", name: "Demo User", email: "demo@travelai.com" };
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "mock-secret-key-for-development-only-TravelAI",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
