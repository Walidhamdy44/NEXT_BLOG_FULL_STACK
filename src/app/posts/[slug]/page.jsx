import SideBar from "@/components/Home/SideBar";
import SinglePostContainer from "@/components/SinglePost/SinglePostContainer";
import UserComponent from "@/components/SinglePost/UserComponent";
import Image from "next/image";
import React from "react";
import { URL } from "../../../../link";

const gatData = async (slug) => {
  const res = await fetch(`${URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Couldn't get Post from ${slug}`);
  }
  return res.json();
};

const SinglePost = async ({ params }) => {
  const { slug } = params;

  const data = await gatData(slug);

  return (
    <div className="min-h-screen mt-[20px] flex flex-col gap-[30px]">
      <div className="flex items-start gap-4 max-sm:flex-col justify-between">
        <div className="flex flex-col items-start gap-5 flex-1">
          <p className="text-[30px] font-extrabold">{data.title}</p>
          {data.user ? (
            <div className="flex items-center gap-3">
              <Image
                alt="user image"
                src={data.user.image}
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />

              <div className="flex flex-col items-start">
                <p className="font-extrabold">{data.user.name}</p>
                <p className="text-gray-400 text-[14px]">
                  {data.createdAt.substring(0, 10)}
                </p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex-1">
          <Image
            src={data.img}
            alt="imag"
            width={450}
            height={250}
            style={{ objectFit: "cover", height: "250px" }}
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 max-md:flex-col my-[30px]">
        <SinglePostContainer data={data} slug={slug} />
        <SideBar />
      </div>
    </div>
  );
};

export default SinglePost;
