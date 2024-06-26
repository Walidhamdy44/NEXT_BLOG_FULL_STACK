"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";

// initialize app

const WritePage = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const Router = useRouter();
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageLink(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "unauthenticated") {
    Router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (title === "") {
      alert("Title is required");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: imageLink,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      Router.push(`/posts/${data.slug}`);
    }
  };
  return (
    <div className="min-h-[500px] mt-[30px] write overflow-hidden">
      <div className="flex flex-col items-start gap-4">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className="text-[22px] mt-[10px]">Select One Category :</p>
        <select className="select" onChange={(e) => setCatSlug(e.target.value)}>
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div className="flex items-center gap-4 ">
          <button
            style={{ border: "1px solid #000", borderRadius: "50%" }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Image
              alt="seo"
              src="/plus.png"
              width={50}
              height={50}
              className="rounded-full"
            />
          </button>
          {open ? (
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <button style={{ border: "1px solid #000", borderRadius: "50%" }}>
                <label htmlFor="image">
                  <Image
                    alt="seo"
                    src="/image.png"
                    width={40}
                    height={40}
                    className="rounded-full p-1 cursor-pointer"
                  />
                </label>
              </button>
              <button style={{ border: "1px solid #000", borderRadius: "50%" }}>
                <Image
                  alt="seo"
                  src="/image2.png"
                  width={40}
                  height={40}
                  className="rounded-full p-1"
                />
              </button>
              <button
                style={{
                  border: "1px solid #000",
                  borderRadius: "50%",
                }}
              >
                <Image
                  alt="seo"
                  src="/upload.png"
                  width={40}
                  height={40}
                  className="rounded-full p-1"
                />
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="mt-[30px]">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell Us your Story"
          />
        </div>
        <button
          className="btn-primary "
          style={{ backgroundColor: "#7fc52d", padding: "10px 20px" }}
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
