"use client";
import { useState } from "react";


import { Button, Input } from "antd";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="grid gap-2 space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="firstName"
        >
          First Name
        </label>
        <Input
          style={{ padding: "10px 12px" }}
          id="firstName"
          placeholder="Enter your email"
          type="text"
          autoCapitalize="none"
          autoComplete="text"
          autoCorrect="off"
        />
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <Input
          style={{ padding: "10px 12px" }}
          id="lastName"
          placeholder="Enter your email"
          type="text"
          autoCapitalize="none"
          autoComplete="text"
          autoCorrect="off"
        />
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
        <div className="relative">
          <label
            className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            style={{ padding: "10px 12px", marginTop: "10px" }}
            id="password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            autoCapitalize="none"
            autoComplete="current-password"
          />
          <Button className="w-full mt-6 !bg-blue-500 hover:!bg-blue-600 !py-5 !text-white">
            Sign Up
          </Button>
        </div>
        <div className="grid gap-3 mt-4">
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
      </div>
    </div>
  );
}
