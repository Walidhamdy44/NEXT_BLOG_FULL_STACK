"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "primereact/button";
import React from "react";
import DialogLogOut from "./Dialog";

const AuthNav = () => {
  const session = useSession();
  const state = session.status;
  return (
    <div>
      {state === "unauthenticated" ? (
        <div>
          <Link
            href="/login"
            className="cursor-pointer rounded-2xl p-1 font-extrabold bg-cyan-400 text-white"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="flex items-center max-sm:flex-col gap-3 lg:pl-2">
          <Link
            href="/write"
            className="cursor-pointer rounded-2xl font-extrabold p-1 bg-lime-500 text-white"
          >
            Write
          </Link>
          <span className="cursor-pointer rounded-2xl p-1 font-extrabold bg-red-800 text-white">
            <DialogLogOut
              logOutFunction={() => {
                signOut();
              }}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
