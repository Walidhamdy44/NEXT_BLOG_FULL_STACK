import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ img, title, type, desc, date, slug }) => {
  return (
    <div className="flex items-start gap-3 max-sm:flex-col mb-4">
      <Image
        src={img}
        alt="hih"
        width={300}
        height={500}
        style={{ height: "285px", width: "300px" }}
      />
      <div className="flex items-start gap-3 flex-col h-[285px]">
        <div className="flex items-center gap-3">
          <span>{date.substring(0, 10)} - </span>
          <span className="text-red-500 font-light ">{type}</span>
        </div>
        <div className="flex flex-1 flex-col gap-3 items-start landing-text">
          <p className="" style={{ fontSize: "18px", letterSpacing: "0" }}>
            {title}
          </p>
          <div
            className="text-gray-500 custom-scroll"
            style={{
              fontSize: "15px",
              maxHeight: "170px", // Adjust this height as necessary
              overflowY: "auto",
            }}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <Link href={`/posts/${slug}`} className="btn-primary">
            Read More!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
