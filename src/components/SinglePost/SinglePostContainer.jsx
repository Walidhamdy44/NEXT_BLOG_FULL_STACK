import React from "react";
import CommentContainer from "./CommentContainer";

const SinglePostContainer = ({ data, slug }) => {
  return (
    <div className=" basis-[67%]">
      <div className="flex items-start flex-col my-[30px]">
        <div
          className="flex flex-col gap-4"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />

        <CommentContainer postSlug={slug} />
      </div>
    </div>
  );
};

export default SinglePostContainer;
