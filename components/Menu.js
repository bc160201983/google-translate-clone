import React from "react";
import { HiDocumentAdd } from "react-icons/hi";
const Menu = () => {
  return (
    <div className="h-[56px] flex justify-start items-center font-medium px-3 text-[#174Ea6] bg-[#FAFAFA] space-x-3">
      <div className="btn flex justify-center items-center rounded py-2 px-3 border bg-white border-[trasparent]">
        Text
      </div>
      <div className="btn flex justify-center items-center rounded py-2 px-3 border bg-white border-[trasparent]">
        <HiDocumentAdd />
        Document
      </div>
      <div className="btn flex justify-center items-center rounded py-2 px-3 border bg-white border-[trasparent]">
        Website
      </div>
    </div>
  );
};

export default Menu;
