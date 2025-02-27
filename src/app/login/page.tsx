import { auth } from "@/auth";
import { LoginForm } from "@/components/client/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
 if(session?.user) redirect("/")
  return (
    <>
      <div className="w-full h-dvh flex items-center justify-between bg-black">
        <Card className="mx-auto max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-center">Login Form</CardTitle>
          </CardHeader>
          <CardContent>
          <LoginForm/>
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
    </>
  );
};

export default Page;
