"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

const credentialsLogin = async (email: string, password: string) => {
  try {
    console.log('enter :>> ');
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { error: true, message: error.cause };
    }
    
    return { error: true, message: "An unexpected error occurred." };
  }
};

export { credentialsLogin };
