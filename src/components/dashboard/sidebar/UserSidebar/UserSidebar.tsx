"use client";
import Link from "next/link";

import Image from "next/image";
import Profile from "../../../../../public/assets/profile-06.webp";
import { Fragment } from "react";
import { sidebarLinks } from "./SidebarLink";


export function UserSidebar({role} : {role: string}) {
  const basePath = `/dashboard/${role}`;
  const roleByFilterSidebar = sidebarLinks.filter((link) =>
    link.roles.includes(role)
  );

  return (
    <div className="w-full min-h-screen bg-white border shadow-md sticky top-0  rounded-md">
      {/* Profile Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="h-[200px] bg-[#1B2559] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[160px]">
          <div className="relative">
            <Image
              src={Profile}
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full border-4 border-white"
            />
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Patient Info */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-xl font-semibold text-[#1B2559]">Hendrita Hayes</h2>
        <p className="text-sm text-gray-500 mt-1">Patient ID : PT254654</p>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-1">
          <span>Female</span>
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          <span>32 years 03 Months</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <div className="space-y-1">
          {roleByFilterSidebar.map(({ slug: href, label, icon: Icon }) => (
            <Fragment key={label}>
              <Link
                key={href}
                href={`${basePath}/${href}`}
                className=" flex items-center gap-3 px-4 font-semibold py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1">{label}</span>
              </Link>
            </Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
}
