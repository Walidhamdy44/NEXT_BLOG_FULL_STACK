"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <div className="flex items-center justify-center">Loading...</div>;
  }
  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center mt-[30px]">
      <div className="flex items-center gap-4 flex-col login">
        <button
          className="btn-primary"
          onClick={() => {
            signIn("google");
          }}
        >
          Sign In With Google
        </button>
        <button
          className="btn-primary"
          onClick={() => {
            signIn("github");
          }}
        >
          Sign In With Gitgub
        </button>
        <button className="btn-primary cursor-not-allowed" disabled>
          Sign In With Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
