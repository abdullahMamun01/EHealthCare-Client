"use client";
import { Menu, MenuProps } from "antd";

import React, { useState } from "react";
import menuItems from "./menuItems";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter()
  const onClick: MenuProps["onClick"] = (e) => {
    const selectedItem = menuItems?.find((item) => e.keyPath.includes(item.key as string));
    if (!selectedItem) return;
    const targetRoute =
      selectedItem.children?.find((child) => child.key === e.key)?.route || selectedItem.route;
  
    if (targetRoute) {
      router.push(targetRoute);
    }
  };

  const [collapsed, setCollapsed] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${collapsed ? "col-span-1" : "col-span-2"} sticky top-0 h-screen bg-sky-700`}>
      <div className="flex h-16 items-center justify-between px-4 py-5 bg-sky-700">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-100 pl-7">E-HEALTHEASE</span>
        </div>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 1 }}
          className="bg-sky-600 "
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
      </div>

      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={
          menuItems.map((item) => ({
            ...item,
            className: "!text-gray-200 text-lg",
          })) as MenuProps["items"]
        }
        className="p-4 bg-sky-700 "
      />
    </div>
  );
}
