"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

const credentialsLogin = async (email: string, password: string) => {
  try {
    const signin = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (signin?.error) {
      return { error: true, message: signin.error };
    }

    return { error: false, message: "Login successful", data: signin };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { error: true, message: error.cause };
    }

    return { error: true, message: "An unexpected error occurred." };
  }
};

export { credentialsLogin };
