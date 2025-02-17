import Link from "next/link"
import {
  LayoutDashboard,
  Calendar,
  Heart,
  Users2,
  FileText,
  Wallet,
  Receipt,
  MessageSquare,
  Activity,
  Settings,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import Profile from '../../../../public/assets/profile-06.webp'
export function Sidebar() {
  return (
    <div className="w-full min-h-screen bg-white border-r shadow-md sticky top-0">
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
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-white bg-blue-500 rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/appointments"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>My Appointments</span>
          </Link>

          <Link
            href="/favourites"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Heart className="w-5 h-5" />
            <span>Favourites</span>
          </Link>

          <Link
            href="/dependants"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Users2 className="w-5 h-5" />
            <span>Dependants</span>
          </Link>

          <Link
            href="/medical-records"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FileText className="w-5 h-5" />
            <span>Medical Records</span>
          </Link>

          <Link
            href="/wallet"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Wallet className="w-5 h-5" />
            <span>Wallet</span>
          </Link>

          <Link
            href="/invoices"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Receipt className="w-5 h-5" />
            <span>Invoices</span>
          </Link>

          <Link
            href="/message"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="flex-1">Message</span>
            <span className="w-5 h-5 flex items-center justify-center bg-yellow-400 rounded-full text-xs text-white">
              2
            </span>
          </Link>

          <Link
            href="/vitals"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Activity className="w-5 h-5" />
            <span>Vitals</span>
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>

          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

