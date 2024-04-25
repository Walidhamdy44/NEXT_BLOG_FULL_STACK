import React from "react";
import SlidBox from "./SlidBox";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" basis-[28%]">
      <h3 className="text-gray-600 font-mono  mt-[30px]">Whats Hot 🔥!</h3>
      <h2 className="text-[22px] font-extrabold mb-[30px]">Most Populer</h2>
      <div className="flex flex-col gap-4 items-start">
        <SlidBox
          color="#b09e06"
          name="Travel"
          user="Walid R"
          desc="It typically features an eye-catching hero section"
        />
        <SlidBox
          color="#147d73"
          name="Fashion"
          user="Ajmed Sam"
          desc="It typically features an eye-catching hero section ,our blog website is the best in the wirld"
        />
        <SlidBox
          color="#147d73"
          name="Fashion"
          user="Savii md"
          desc="It typically features an eye-catching hero section"
        />
        <SlidBox
          color="#8e0900"
          name="Food"
          user="Mario KIL"
          desc="It typically features an eye-catching hero section"
        />
        <SlidBox
          color="#054d56"
          name="Cooding"
          user="Alison Ghar"
          desc="It typically features an eye-catching hero section"
        />
      </div>
      <div className="flex items-start gap-3 max-sm:mt-[20px] lg:mt-[40px]  flex-col">
        <h3 className="text-gray-600 font-mono  ">Descover By Tobical 🎉</h3>
        <h2 className="text-[22px] font-extrabold mt-[-10px]">Catagores</h2>
        <div className="flex items-center gap-3  justify-center text-white flex-wrap">
          <Link
            href="/blog?cat=style"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#0e5272",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Style</span>
          </Link>
          <Link
            href="/blog?cat=fashion"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#147d73",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Fashion</span>
          </Link>
          <Link
            href="/blog?cat=coding"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#054d56",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Coding</span>
          </Link>
          <Link
            href="/blog?cat=food"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#8e0900",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Food</span>
          </Link>
          <Link
            href="/blog?cat=travel"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#b09e06",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Travel</span>
          </Link>
          <Link
            href="/blog?cat=culture"
            className="flex items-center gap-2  w-fit rounded-xl"
            style={{
              backgroundColor: "#ec3900",
              padding: "15px 25px",
            }}
          >
            <span className="text-[16px] font-semibold">Culture</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
