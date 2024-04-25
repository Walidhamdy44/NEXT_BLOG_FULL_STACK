import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthNav from "@/components/Ui/authNav";
import ThemeToggle from "../Ui/ThemeToggle";
import MobileNav from "../Ui/MobileNav";

const NavBar = () => {
  return (
    <div className="flex items-center gap-2 justify-between py-[20px] select-none">
      <div className="flex items-center gap-4 ">
        <Link href="/">
          <Image
            alt="logo"
            src="/O.png"
            width={40}
            height={40}
            className="rounded-xl"
          />
        </Link>
        <p className="text-[20px] font-bold italic">Lo Blog</p>
      </div>
      <ThemeToggle />
      <div className="flex items-center gap-2 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/blog">New Posts</Link>
        <Link href="/404">404</Link>
        <AuthNav />
      </div>
      <MobileNav />
    </div>
  );
};

export default NavBar;
