import React from "react";
import Image from "next/image";

const Comment = ({ text, user, date }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <Image
          alt="user image"
          src={user.image}
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
          <p className="font-extrabold">{user.name}</p>
          <p className="text-gray-400 text-[14px]">{date.substring(0, 10)}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
