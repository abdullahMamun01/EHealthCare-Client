import { Avatar, Button } from "antd";
import Search from "antd/es/input/Search";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center">
        <Button className="mr-2 md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>

      <div className="relative w-1/4 mr-auto">
        <Search placeholder="input search text" size="large" />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            3
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <Avatar>
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Admin"
              className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
              width={40}
              height={40}
            />
          </Avatar>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
