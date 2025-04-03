"use client";
import React from "react";
import { Badge, Dropdown, Space, Avatar } from "antd";
import { Bell, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { ItemType } from "antd/es/menu/interface";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/hooks";
const menuItems: ItemType[] = [
  {
    key: "profile",
    label: (
      <div className="py-2 px-1">
        <Space>
          <Avatar
            size={32}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
          />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500 }}>
              Hendrita Hayes
            </div>
            <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.85)" }}>
              Patient
            </div>
          </div>
        </Space>
      </div>
    ),
    style: { height: "auto", margin: "8px 0" },
  },
  { type: "divider" },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <User size={16} />,
  },
  {
    key: "settings",
    label: "Profile Settings",
    icon: <Settings size={16} />,
  },
  { type: "divider" },
];
export default function AvatarDropDown() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // console.log(state, "heelo");
  };
  const logoutItem : ItemType[] = [
    {
      key: "logout",
      label: "Logout",
      icon: <LogOut size={16} />,
      danger: true,
      onClick: handleLogout
    },
  ];
  return (
    <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
      <Space size={24} align="center">
        <Badge dot offset={[-2, 2]} status="error">
          <Bell className="w-5 h-5" />
        </Badge>
        <Badge dot offset={[-2, 2]} status="success">
          <MessageSquare className="w-5 h-5" />
        </Badge>

        <Dropdown
          menu={{
            items: [...menuItems, ...logoutItem],
          }}
          trigger={["click"]}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Avatar
            style={{ cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
          />
        </Dropdown>
      </Space>
    </div>
  );
}
