import Image from "next/image";

const UserComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        alt="user image"
        src="/coding.jpg"
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
        <p className="font-extrabold">hwif</p>
        <p className="text-gray-400 text-[14px]">23 Nov 2024</p>
      </div>
    </div>
  );
};

export default UserComponent;
