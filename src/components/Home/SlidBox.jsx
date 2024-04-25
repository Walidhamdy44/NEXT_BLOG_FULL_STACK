import React from "react";

const SlidBox = ({ name, user, color, desc }) => {
  return (
    <div className="flex items-start gap-3 flex-col">
      <div
        className="rounded-2xl p-[4px] w-fit text-[14px] font-semibold text-white"
        style={{ backgroundColor: `${color}` }}
      >
        {name}
      </div>
      <p className="text-[14px]">{desc}</p>
      <div className="flex items-center gap-3">
        <span className="text-red-500 font-light ">{user}</span>
        <span>11/5/2024</span>
      </div>
    </div>
  );
};

export default SlidBox;
