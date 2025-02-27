import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models/userModel";
import { compare } from "bcryptjs";
import { connectToDatabase } from "./lib/utils";

connectToDatabase();
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials) {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin({
            cause: "Please provide both email and password",
          });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user)
          throw new CredentialsSignin({ cause: "Invalid email or password" });
        if (!user.password)
          throw new CredentialsSignin({ cause: "Invalid email or password" });

        const isMatch = await compare(password, user.password);
        if (!isMatch)
          throw new CredentialsSignin({ cause: "Invalid email or password" });
        return { name: user.name, email: user.email, id: user._id };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
