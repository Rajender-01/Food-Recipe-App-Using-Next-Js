import Image from "next/image";
import React from "react";
import { ImageArticleData } from "@/utils/data";

const ImageArticle = () => {
  return (
    <div className="ImageArticle bg-pattern w-full mt-[80px]">
      <div className="container d-flex-between gap-10 shadow-sm bg-white">
        <div className="flex-1 d-flex-col-center">
          <h4
            className="text-4xl mb-5 font-bold capitalize"
            dangerouslySetInnerHTML={{ __html: ImageArticleData?.title }}
          />
          <div
            className="text-[19px] max-w-2xl leading-8 text-center"
            dangerouslySetInnerHTML={{ __html: ImageArticleData?.description }}
          />
        </div>
        <div>
          <Image
            src={"/images/image-article2.avif"}
            alt="food"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageArticle;
