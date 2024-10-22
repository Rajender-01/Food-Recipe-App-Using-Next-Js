import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/models/userModel";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/utils";

const Page = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-between bg-black">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-center">Signup Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              "use server";

              const name = formData.get("name") as string | undefined;
              const email = formData.get("email") as string | undefined;
              const password = formData.get("password") as string | undefined;

              if (!email || !password || !name) {
                throw new Error("Please provide all fields");
              }

              // CONNECTION WITH DATABASE

              await connectToDatabase()
              const user = await User.findOne({ email });
              if (user) throw new Error("User already exists");

              const hashedPassword = await hash(password, 10);

              await User.create({
                name,
                email,
                password: hashedPassword,
              });

              redirect("/login");
            }}
            className="space-y-6"
          >
            <Input placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button className="w-full" type="submit">
              Signup
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-5">
          <span>or</span>
          <form action="">
            <Button type="submit" variant="outline">
              Login With Google
            </Button>
          </form>
          <Link href="/login">
            Already have an account yet? <b>Login</b>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
