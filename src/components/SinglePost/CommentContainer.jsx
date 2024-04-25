"use client";
import { useSession } from "next-auth/react";
import Comment from "./Comment";
import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";
import { URL } from "../../../link";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
const CommentContainer = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    if (!desc == "") {
      await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ desc, postSlug }),
      });
      mutate();
      setDesc("");
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-[22px] font-extrabold mt-[30px]">Comments</h2>
      {status === "authenticated" ? (
        <div className="flex items-end gap-4 max-sm:flex-col max-lg:flex-col mb-7">
          <textarea
            placeholder="Add New Comment!"
            className="py-[10px] px-[10px] lg:w-[400px] max-sm:w-[300px] h-[170px]"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />
          <button className="btn-primary" onClick={handleSubmit}>
            Comment
          </button>
        </div>
      ) : (
        <Link className="btn-primary" href="/login">
          LogIn To Add Any Comment
        </Link>
      )}
      <div className="flex items-start gap-6 flex-col">
        {data?.map((comment, index) => (
          <Comment
            text={comment.desc}
            key={index}
            user={comment.user}
            date={comment.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
