"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthNav from "./authNav";

const MobileNav = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div className="lg:hidden">
      {!open ? (
        <button>
          <Image
            alt="menu"
            src="/hamburger.svg"
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => {
              SetOpen(true);
            }}
          />
        </button>
      ) : (
        <div className="navmobile">
          <button
            onClick={() => {
              SetOpen(false);
            }}
            className="btn"
          >
            X
          </button>
          <div className="flex items-center gap-2 flex-col ">
            <Link href="/">Home</Link>
            <Link href="/blog">New Posts</Link>
            <Link href="/404">404</Link>
            <AuthNav />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
