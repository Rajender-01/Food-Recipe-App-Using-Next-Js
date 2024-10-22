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

const Page = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-between bg-black">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-center">Login Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="space-y-6">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full" type="submit">
              Login
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
          <Link href="/signup">
            Don&apos;t have an account yet? <b>Sign Up</b>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
