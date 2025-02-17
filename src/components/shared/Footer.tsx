import Link from "next/link"
import { Facebook, Twitter, Linkedin, PinIcon as Pinterest } from "lucide-react"
import Image from "next/image"
import Logo from '../../../public/assets/logo.png'
export default function Footer() {
  return (
    <footer className="w-full bg-blue-700  text-[#FBFFFF] py-8 footer">
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className=" text-2xl font-bold text-[#FBFFFF]">
                    <Image  src={Logo} alt="logo"  className="object-contain max-h-[100px] max-w-[220px]"/>
                </div>
              </div>
            </Link>
            <p className="text-gray-[#FBFFFF]">There are to popular belie Lorem is Ipsum is not simply random.</p>
            <div className="space-y-2">
              <p className="text-[#FBFFFF] font-medium">Hello :</p>
              <p className="text-[#FBFFFF]">support@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#FBFFFF] font-medium">Follow :</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#FBFFFF]">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-[#FBFFFF]">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-[#FBFFFF]">
                  <Pinterest size={20} />
                </Link>
                <Link href="#" className="text-[#FBFFFF]">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FBFFFF]">Company</h3>
            <div className="grid gap-3">
              <Link href="#" className="text-[#FBFFFF]">
                Home
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                About Us
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Our Service
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Our Team
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <div className="grid gap-3">
              <Link href="#" className="text-[#FBFFFF]">
                Our Process
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Appointment
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                FAQ
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Quick Links & Official Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Official Info</h3>
            <div className="grid gap-3">
              <p className="text-[#FBFFFF]">2767 Sunrise Street, NY 1002, USA</p>
              <p className="text-[#FBFFFF]">company@gmail.com</p>
              <p className="text-[#FBFFFF]">+965548547564</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#FBFFFF] text-sm">
            <p>{new Date().getFullYear()} <span className="text-gray-400 mx-2">E-HEALTHEASSE.</span> All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="#" className="text-[#FBFFFF]">
                Terms and conditions
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Cookies
              </Link>
              <Link href="#" className="text-[#FBFFFF]">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

