"use client";

import { useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, Input } from "antd";

import LoginImage from "../../../public/assets/auth-1.png";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import Logo from "../logo/Logo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted  text-white lg:flex dark:border-r">
        <div className="relative hidden h-full flex-col bg-gradient-to-b from-blue-50 to-sky-50 p-10 text-white lg:flex dark:border-r">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href="/">
              <span className="text-blue-600 text-2xl font-bold">
                <Logo />
              </span>
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <Image
              src={LoginImage}
              alt="Doctor consultation illustration"
              width={600}
              height={400}
              className="mx-auto rounded-lg"
              priority
            />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg text-blue-800">
                "The best way to find yourself is to lose yourself in the
                service of others."
              </p>
              <footer className="text-sm text-blue-600">
                - Mahatma Gandhi
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-blue-400 tracking-tight">
              Login E-HEALTHEASE
            </h1>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <Input
                  style={{ padding: "10px 12px" }}
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    style={{ padding: "10px 12px" }}
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    autoCapitalize="none"
                    autoComplete="current-password"
                  />
                  <Button
                    className="!absolute !right-0 !top-0 !h-full !px-3 !py-2 !bg-transparent !border-none "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              
            </div>
            <Button className="w-full !bg-blue-500 hover:!bg-blue-600 !py-5 !text-white">
              Sign in
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
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
              <Link
                href="/signup"
                className="text-blue-500 hover:text-blue-600"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
