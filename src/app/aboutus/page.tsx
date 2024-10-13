import Banner from "@/components/Banner";
import React from "react";
import { AboutData } from "@/utils/data";

const page = () => {
  return (
    <>
      <Banner />
      <div className="w-full h-auto d-flex-center">
        <div
          className="w-full max-w-[1172px] px-4 mt-[80px]"
          dangerouslySetInnerHTML={{ __html: AboutData?.data }}
        />
      </div>
    </>
  );
};

export default page;
