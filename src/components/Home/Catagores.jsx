import Image from "next/image";
import Link from "next/link";
import React from "react";
import { URL } from "../../../link";

const GetData = async () => {
  const res = await fetch(`${URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Couldn't get category");
  }
  return res.json();
};

const Catagores = async () => {
  const data = await GetData();

  return (
    <div className="flex flex-col gap-4 items-start my-[30px]">
      <p className="text-[22px] font-bold">Populer Catagores</p>
      <div className="cat flex items-center gap-3  justify-center text-white max-sm:flex-wrap">
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={`blog?cat=${item.slug}`}
              className="flex items-center gap-2  w-fit rounded-xl "
              style={{
                backgroundColor: `${item.color}`,
                padding: "15px 25px",
              }}
            >
              <Image
                alt="new blog"
                src={item.img}
                width={0}
                height={0}
                className=""
                style={{ borderRadius: "50%", height: "25px", width: "25px" }}
              />
              <span className="text-[16px] font-semibold">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Catagores;
