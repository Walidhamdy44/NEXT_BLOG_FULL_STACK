"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Paganation = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3 justify-between my-[20px]">
      <button
        className="w-fit py-[10px] px-[25px] bg-rose-700 text-white rounded-lg"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="w-fit py-[10px] px-[25px] bg-rose-700 text-white rounded-lg"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Paganation;
