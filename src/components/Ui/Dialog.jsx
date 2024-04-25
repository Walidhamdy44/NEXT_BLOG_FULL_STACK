import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function DialogLogOut({ logOutFunction }) {
  const [visible, setVisible] = useState(false);

  const logOut = () => {
    logOutFunction();
    setVisible(false);
  };
  const footerContent = (
    <div className="flex items-start gap-4 p-[20px] text-black">
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className=" btn-primary"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => logOut()}
        autoFocus
        className="btn-primary"
      />
    </div>
  );

  return (
    <div className="card flex items-start justify-center ">
      <Button
        label="Logout"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        className="p-4 bg-slate-400 text-white rounded-3xl"
        visible={visible}
        style={{ width: "70%" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <p className="p-4 text-[25px] text-black font-extrabold">
          Are You Sure!
        </p>
        <p className="px-4 text-[22px] text-black">You Want To Log Out!</p>
      </Dialog>
    </div>
  );
}
