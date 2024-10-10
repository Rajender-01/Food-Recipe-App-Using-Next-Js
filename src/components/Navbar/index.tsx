import React from "react";
import { BsSearch } from "react-icons/bs";
import { PiBowlSteam } from "react-icons/pi";
import { NavbarData } from "../../utils/data";

const index: React.FC = () => {
  return (
    <div className="w-full h-auto shadow-md">
      <div className="w-full h-[30px] bg-primaryColor"></div>
      <div className="d-flex-between py-5 container">
        <div className="flex items-center gap-2">
          <PiBowlSteam
            size={NavbarData?.header?.iconSize}
            className="mb-[5px]"
          />
          <span className="text-[22px] font-medium">
            {NavbarData?.header?.title}
          </span>
        </div>

        <ul className="d-flex-center gap-1 text-[21px] space-x-11 font-medium">
          {NavbarData?.menuItems?.map((item, idx: number) => {
            return (
              <li key={idx} className="cursor-pointer relative group">
                {item?.name}
                <span className="absolute left-[50%] translate-x-[-50%] -bottom-0.5 h-[2px] w-0 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        <div className="max-w-64 bg-gray-200 rounded-2xl flex items-center px-4">
          <BsSearch
            size={NavbarData?.search?.iconSize}
            opacity={NavbarData?.search?.iconSize}
          />
          <input
            className="w-full px-3 py-1.5"
            type="search"
            placeholder={NavbarData?.search?.placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
