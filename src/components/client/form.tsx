"use client";
import { credentialsLogin } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  return (
    <>
      <form
        action={async (formData: FormData) => {
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;

          if (!email || !password) toast.error("please provide all fields");

          const toastId = toast.loading("Logging in...");
          const error = await credentialsLogin(email, password);

          if (!error)
          {
            toast.success("Login successful", {
              id: toastId,
            });
            router.refresh();
          }
          else {
            toast.error(String(error), {
              id: toastId,
            });
          }
        }}
        className="space-y-6"
      >
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export { LoginForm };

