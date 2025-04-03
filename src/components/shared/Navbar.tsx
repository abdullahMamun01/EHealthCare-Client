"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/logo.png";
import { User } from "lucide-react";
import AvatarDropDown from "../user/AvatarDropDown";
import { useToken } from "@/redux/slices/authSlice";
import { useAppSelector } from "@/redux/hooks";
export default function Navbar() {
  const token = useAppSelector(useToken);

  return (
    <nav className="border-b sticky top-0 z-50 bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-500 uppercase"
            >
              {/* E-HealthEase */}
              <Image
                src={Logo}
                alt="logo"
                className="object-contain max-h-[100px] max-w-[220px]"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-500 font-semibold">
                Home
              </Link>
              <Link
                href="/doctors"
                className="text-gray-600 hover:text-blue-500"
              >
                Doctors
              </Link>
              <Link
                href="/patients"
                className="text-gray-600 hover:text-blue-500"
              >
                Patients
              </Link>
              <Link
                href="/pharmacy"
                className="text-gray-600 hover:text-blue-500"
              >
                Pharmacy
              </Link>
              <Link href="/pages" className="text-gray-600 hover:text-blue-500">
                Pages
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-500">
                Blog
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-blue-500">
                Admin
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {token ? (
              <AvatarDropDown />
            ) : (
              <>
                <Link href="/register">
                  <Button
                    variant="outlined"
                    color="blue"
                    className="flex items-center justify-center rounded-full bg-[#15558d] px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-[#124a7c]"
                  >
                    <span className="mr-1">Register</span>
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="flex items-center justify-center rounded-full bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-[#0fb3e8]">
                    <User className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
