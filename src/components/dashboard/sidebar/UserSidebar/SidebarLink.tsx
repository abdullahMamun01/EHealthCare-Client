import {
  LayoutDashboard,
  Calendar,
  Heart,
  Users2,
  FileText,
  Wallet,
  Activity,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarLinks = [
  {
    slug: "",
    label: "Dashboard",
    icon: LayoutDashboard,
    roles: ["patient", "doctor"],
  },
  {
    slug: "appointments",
    label: "My Appointments",
    icon: Calendar,
    roles: ["patient", "doctor"],
  },
  { slug: "favourites", label: "Favourites", icon: Heart, roles: ["patient"] },
  { slug: "my-patient", label: "My Patients", icon: Users2, roles: ["doctor"] },
  {
    slug: "medical-records",
    label: "Medical Records",
    icon: FileText,
    roles: ["patient"],
  },
  {
    slug: "wallet",
    label: "Wallet",
    icon: Wallet,
    roles: ["patient", "doctor"],
  },
  {
    slug: "profile",
    label: "Update Profile",
    icon: FileText,
    roles: ["patient", "doctor"],
  },
  {
    slug: "vitals",
    label: "Vitals",
    icon: Activity,
    roles: ["patient", "doctor"],
  },
  {
    slug: "settings",
    label: "Settings",
    icon: Settings,
    roles: ["patient", "doctor"],
  },
  {
    slug: "logout",
    label: "Logout",
    icon: LogOut,
    roles: ["patient", "doctor"],
  },
];
