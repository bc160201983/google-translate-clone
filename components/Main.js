import { data } from "./data";
import React, { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCheck,
} from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown, IoIosSwap } from "react-icons/Io";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState("");
  const arrayOfObject = Object.keys(data[0]).map((key) => data[0][key]);
  const [activeLang, setActiveLang] = useState(-1);
  const filterLang = arrayOfObject.filter((lang) =>
    lang.toLowerCase().startsWith(searchLanguage.toLowerCase())
  );
  const [lang, setLang] = useState(arrayOfObject);

  const handleClick = (id) => {
    setActiveLang(id);
  };

  return (
    <div className="bg-white w-full h-[220px] shadow-lg rounded-lg border border-[trasparent]">
      <div className=" h-[48px] text-[14px] whitespace-nowrap font-medium flex justify-start items-center border-b border-[trasparent] w-full">
        <div className=" w-[50%] flex justify-start items-center">
          <div className="lang active">English</div>
          <div className="lang">Spanish</div>
          <div className="lang">Urdu</div>
          <div
            className="lang-icon flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <IoIosArrowUp className="w-[20px] h-[20px]" />
            ) : (
              <IoIosArrowDown className="w-[20px] h-[20px] " />
            )}
          </div>
        </div>
        <div className="lang rounded-full center-icon">
          <IoIosSwap className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-start items-center w-[50%]">
          <div className="lang">English</div>
          <div className="lang">Spanish</div>
          <div className="lang">Urdu</div>
          <div
            className="lang-icon flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <IoIosArrowUp className="w-[20px] h-[20px] " />
            ) : (
              <IoIosArrowDown className="w-[20px] h-[20px] " />
            )}
          </div>
        </div>
      </div>

      <div
        className={`relative ${
          isOpen ? `h-[600px] border-[trasparent] shadow-lg rounded-b-lg` : ""
        }  flex text-[#5f6368] leading-[32px]  text-[24px] whitespace-pre-wrap border `}
      >
        <div className="left w-[50%] h-[170px] rounded-bl-lg  border-r border-[trasparent]">
          <textarea className="w-full h-full rounded-bl-lg resize-none outline-none p-5" />
        </div>
        <div className="left w-[50%] h-[170px] rounded-br-lg border-r border-[trasparent]">
          <textarea
            readOnly
            placeholder="Translation"
            className="w-full  h-full resize-none rounded-br-lg outline-none p-5 text-[#5f6368]"
          />
        </div>
        {isOpen && (
          <div className="modal-all-lang w-full bg-white top-0 bottom-0 left-0 rounded-b-lg right-0 absolute">
            <input
              onChange={(e) => setSearchLanguage(e.target.value)}
              type="text"
              value={searchLanguage}
              className="w-full outline-none border-b border-[trasparent] text-[16px] py-[15px] px-[16px]"
              placeholder="Search Language"
            />
            <div className="h-[calc(600px-64px)] overflow-auto">
              <ul className="m-[15px] p-0 h-full flex-wrap flex flex-col">
                {filterLang.map((item, index) => {
                  return (
                    <div
                      onClick={() => handleClick(index)}
                      key={index}
                      className={`lang-icon ${
                        activeLang === index ? `lang-active` : null
                      } flex justify-center items-center rounded-[4px]`}
                    >
                      <div
                        className={`${
                          activeLang === index ? `visible` : `invisible`
                        } `}
                      >
                        <AiOutlineCheck className="w-[20px] h-[20px] ml-1" />
                      </div>
                      <li className="lang-icon px-2 text-[#000000] w-full  mb-[2px] whitespace-nowrap overflow-hidden text-[14px] cursor-pointer">
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
