import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="landing flex items-center gap-4 flex-col my-[20px]">
      <div className="text-[47px] max-sm:text-[30px]">
        <b>Hey,Walid Hamdy here!</b> Descover My Stories And Creative Ideas.
      </div>
      <div className="flex items-center justify-between gap-6 max-md:flex-col">
        <div className="flex-1">
          <Image alt="landing " src="/culture.jpg" width={700} height={500} />
        </div>
        <div className="flex flex-1 flex-col gap-3 items-start landing-text">
          <p>
            A <b>blog Lo</b> Is website serves as a welcoming and engaging entry
            point for visitors
          </p>
          <p className="mb-[20px]">
            It typically features an eye-catching hero section with an engaging
            tagline and a call-to-action, inviting users to explore the latest
            posts or subscribe for updates. The page showcases a introduction to
            the blog and its (Walid hamdy) provides context and between the blog
            and its audience
          </p>
          <Link href="/posts/fashion" className="btn-primary">
            Read More!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
