import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import {
  BarChart,
  Calendar,
  ChevronDown,
  FileText,
  Home,
  Lock,
  MenuIcon,
  Settings,
  Star,
  Users,
  XCircle,
} from "lucide-react";

type MenuItem = Required<MenuProps>['items'][number];
const menuItems : MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <Home className="mr-3 h-5 w-5" />,
    className: " text-gray-100",
  },
  {
    key: "appointments",
    label: "Appointments",
    icon: <Calendar className="mr-3 h-5 w-5" />,

  },
  {
    key: "specialities",
    label: "Specialities",
    icon: <FileText className="mr-3 h-5 w-5" />,
  },
  {
    key: "doctors",
    label: <span className="text-white">Doctors</span>,
    icon: <span className="!text-white"><Users className="mr-3 h-5 w-5" /></span>,
    style: { color: "whitesmoke" },
    children : [
      {
        key: "doctor-list",
        label: "List Doctors",
        icon: <MenuIcon className="mr-3 h-5 w-5 text-gray-200" />,
      },
      {
        key: "doctors-add",
        label: "Add Doctor",
        icon: <PlusOutlined className="mr-3 h-5 w-5" />,
      },
      {
        key: "doctors-edit",
        label: "Edit Doctor",
        icon: <EditOutlined className="mr-3 h-5 w-5" />,
      },
      {
        key: "doctors-delete",
        label: "Delete Doctor",
        icon: <DeleteOutlined className="mr-3 h-5 w-5" />,
      },
    ]
  },
  {
    key: "patients",
    label: <span className="text-white">Patients</span>,
    icon: <span className="!text-white"><Users className="mr-3 h-5 w-5" /></span>,
    children: [
      {
        key: "patients-list",
        label: "List Patients",
        icon: <MenuIcon className="mr-3 h-5 w-5" />,
      },
      {
        key: "patients-add",
        label: "Add Patient",
        icon: <PlusOutlined className="mr-3 h-5 w-5" />,
      },
      {
        key: "patients-edit",
        label: "Edit Patient",
        icon: <EditOutlined className="mr-3 h-5 w-5" />,
      },
      {
        key: "patients-delete",
        label: "Delete Patient",
        icon: <DeleteOutlined className="mr-3 h-5 w-5" />,
      },
    ]
  },
  {
    key: "reviews",
    label: "Reviews",
    icon: <Star className="mr-3 h-5 w-5" />,
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: <BarChart className="mr-3 h-5 w-5" />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings className="mr-3 h-5 w-5" />,
  },
  {
    key: "profile",
    label: "Profile",
    icon: <Users className="mr-3 h-5 w-5" />,
  },
  {
    key: "authentication",
    label: <span className="text-white">Authentication</span>,
    icon: <span className="!text-white"><Lock className="mr-3 h-5 w-5" /></span>,
    // iconRight: <ChevronDown className="ml-auto h-4 w-4" />,
    className: " text-gray-100",
    // isSubMenu: true,
    children: [
      {
        key: "auth-subitem1",
        label: "Login",
        style: { color:"whitesmoke"}, 
      },
      {
        key: "auth-subitem2",
        label: "Sign Up",
        style: { color:"whitesmoke"}, 
      },
    ],
  },
];

export default menuItems;
