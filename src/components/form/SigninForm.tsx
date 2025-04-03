"use client";

import Link from "next/link";
import { Button, Checkbox } from "antd";

import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/zod/authValidation";
import { useLoginMutation } from "@/redux/api/auth";
import InputField from "./InputField";
import SubmitButton from "../SubmitButton";
import { useToast } from "@/provider/ToastProvider";
import { setUser } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

interface ILogin {
  email: string;
  password: string;
}

export default function SigninForm() {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { control, handleSubmit, setError } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "abcd1234",
    },
  });
  const { successToast, errorToast } = useToast();
  const onSubmit = async (data: ILogin) => {
    try {
      const res = await login(data).unwrap();
      successToast("Logged in successfully!");
      dispatch(
        setUser({
          user: res.user,
          token: res.token,
        })
      );
      const role = res.user.role;
      if (role === "ADMIN") router.push("/dashboard");
      else router.push("/");
    } catch (error) {
      const err = error as any;
      console.log(err.data.message, "error");
      setError("password", { message: err.data.message });
      errorToast(err.data.message);
    }
  };
  console.log(isLoading, "hey loading");
  return (
    <div className="grid gap-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <InputField
              control={control}
              name={"email"}
              label={"E-mail"}
              placeholder={"Enter your email"}
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <InputField
              control={control}
              name={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              type="password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
        </div>
        {/* <Button
          htmlType="submit"
          className="w-full !bg-blue-500 mt-4 hover:!bg-blue-600 !py-5 !text-white"
        >
          Sign in
        </Button> */}
        <SubmitButton
          loading={isLoading}
          buttonText="Sign in"
          loadingText="Signing in..."
        />
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">or</span>
        </div>
      </div>
      <div className="grid gap-3">
        <Button
          variant="outlined"
          className=" w-full  !py-5 !text-blue-500 !border !border-blue-500"
        >
          <GoogleCircleFilled className="text-xl" />
          Sign in with Google
        </Button>
        <Button
          variant="outlined"
          className=" w-full  !py-5 !text-blue-500 !border !border-blue-500"
        >
          <FacebookFilled className="text-xl rounded-full" />
          Sign in with Facebook
        </Button>
      </div>
      <div className="text-center text-sm">
        {"Don't have an account? "}
        <Link href="/signup" className="text-blue-500 hover:text-blue-600">
          Sign up
        </Link>
      </div>
    </div>
  );
}
