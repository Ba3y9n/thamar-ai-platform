"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "#how-it-works", label: "كيف يعمل؟" },
    { href: "#features", label: "مميزات ثمر" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#about", label: "عن ثمر" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="THAMAR AI Logo" width={140} height={50} className="object-contain h-12 w-auto" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-bold transition-colors duration-200 ${
                  pathname === link.href ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-bold text-secondary hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              العربية / EN
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <button className="text-sm font-bold text-secondary hover:text-primary transition-colors">
              تسجيل الدخول
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary/20">
              إنشاء حساب
            </button>
          </div>

          <button 
            className="lg:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl px-4 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100 my-4" />
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-secondary font-bold">
              <Globe className="w-5 h-5" /> العربية / English
            </button>
            <button className="text-secondary font-bold text-right text-lg">تسجيل الدخول</button>
            <button className="bg-primary text-white py-3.5 rounded-xl font-bold w-full text-lg">إنشاء حساب</button>
          </div>
        </div>
      )}
    </nav>
  );
}
