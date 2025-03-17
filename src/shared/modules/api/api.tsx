import LinkIconButton from "@/assets/icons/link-icon-button";
import APISupportPlatforms from "@/assets/svgs/api-supported-platforms";
import Link from "next/link";
import React from "react";

const API = () => {
  return (
    <div className="w-[90%] md:py-10 m-auto flex">
      <div className="md:w-[50%]">
        <h3 className="font-Poppins w-[95%] md:leading-[50px] text-4xl font-medium text-[#e1e1e1]">
          Nous disposons d’une api solide fait pour s’intégrer au mieux à votre
          environnement.
        </h3>
        <Link
          href={"/"}
          className="w-[219px] h-[65px] border-2 border-[#42a3ff] mt-5 rounded-[85px] flex items-center justify-center gap-3"
        >
          <span className="bg-button-text-gradiant text-transparent bg-clip-text text-[20px] font-Poppins font-medium">
            VOIR l’API
          </span>
          <LinkIconButton />
        </Link>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <APISupportPlatforms />
      </div>
    </div>
  );
};

export default API;
