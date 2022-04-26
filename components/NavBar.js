import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="h-[64px] w-full p-2 shadow-md">
      <div className="flex items-center justify-start space-x-2">
        <div className="icon p-3 hover:bg-[#3c404030] rounded-full cursor-pointer">
          <AiOutlineMenu className="w-[24px] h-[24px]" />
        </div>
        <div className="logo text-[20px]">Google Trasnlate</div>
      </div>

      <div className="logo">
        <div className="profile-img"></div>
      </div>
    </nav>
  );
};

export default NavBar;
