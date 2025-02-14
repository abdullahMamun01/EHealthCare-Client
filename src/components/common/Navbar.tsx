import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-2xl font-bold text-blue-500 uppercase">
              E-HealthEase
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-500">
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
            <Button
              variant="outlined"
              color="blue"
              className="!text-blue-500 !border-blue-500"
            >
              Register
            </Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
