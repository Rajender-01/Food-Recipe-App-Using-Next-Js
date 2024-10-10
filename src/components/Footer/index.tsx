import { NavbarData } from "@/utils/data";
import React from "react";
import { PiBowlSteam } from "react-icons/pi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const socialIcons = [
  { icon: TiSocialFacebook, size: 20, color: "white" },
  { icon: TiSocialLinkedin, size: 20, color: "white" },
  { icon: TiSocialTwitter, size: 20, color: "white" },
  { icon: TiSocialYoutube, size: 20, color: "white" },
];

const index = () => {
  return (
    <div className="w-full bg-primaryColor min-h-[273px] d-flex-center ">
      <div className="container d-flex-between">
        <div className="d-flex-center gap-3">
          <PiBowlSteam
            size={30}
            className="mb-[2px]"
            color="white"
          />
          <span className="text-[27px] font-medium text-white">
            {NavbarData?.header?.title}
          </span>
        </div>

        <div className="d-flex-center gap-4">
          {socialIcons &&
            socialIcons?.map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 border-2 rounded d-flex-center group cursor-pointer"
              >
                <Icon.icon
                  size={Icon?.size}
                  color={Icon?.color}
                  className="group-hover:scale-110 transition-all"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
