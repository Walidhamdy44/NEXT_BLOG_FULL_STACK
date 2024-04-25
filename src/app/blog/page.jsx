"use client";
import CardsContainer from "@/components/Home/CardsContainer";
import SideBar from "@/components/Home/SideBar";

const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="flex items-center flex-col">
      <div className="w-full bg-[#0e5272] text-center font-extrabold text-white text-[25px] p-3 my-2 capitalize">
        {cat} Blog
      </div>
      <div className="flex items-start justify-between gap-4 max-md:flex-col my-[30px]">
        <CardsContainer page={page} cat={cat} />
        <SideBar />
      </div>
    </div>
  );
};

export default page;
