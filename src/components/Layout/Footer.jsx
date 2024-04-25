import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-start gap-4 justify-between mt-[50px] footer max-sm:flex-col">
      <div className="flex items-start gap-2 flex-col basis-[65%]">
        <Link href="/" className="flex items-center gap-4 ">
          <Image
            alt="logo"
            src="/O.png"
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
            }}
          />
          <p className="text-[23px] font-extrabold ">Lo Blog</p>
        </Link>
        <p className="text-gray-400 w-[70%] my-[20px] max-sm:w-[100%]">
          It typically features an eye-catching hero section with an engaging
          tagline and a call-to-action, it posts or subscribe for updates.
        </p>
        <div className="flex items-start gap-2 ">
          <Link href="https://www.facebook.com/walid.elgen.75/" target="_blank">
            <Image
              alt="facebook"
              src="/facebook.png"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
          <Link href="https://www.facebook.com/walid.elgen.75/" target="_blank">
            <Image
              alt="facebook"
              src="/youtube.png"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
          <Link href="https://www.facebook.com/walid.elgen.75/" target="_blank">
            <Image
              alt="facebook"
              src="/tiktok.png"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
          <Link href="https://www.facebook.com/walid.elgen.75/" target="_blank">
            <Image
              alt="facebook"
              src="/instagram.png"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between basis-[30%] footer-links">
        <ul>
          <li>Links</li>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Tags</li>
          <li>Fashion</li>
          <li>Style</li>
          <li>Food</li>
          <li>Travel</li>
        </ul>
        <ul>
          <li>Social</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Tiktok</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
