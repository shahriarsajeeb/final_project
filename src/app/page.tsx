import React from "react";
import Hero from "@/shared/modules/hero";
import Pricing from "@/shared/modules/pricing";
import API from "@/shared/modules/api";
import Clients from "@/shared/modules/clients";
import Information from "@/shared/modules/information";
import ShadowSvg from "@/assets/svgs/shadow-svg";

const Page = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <API />
      <Clients />
      <div className="relative">
        <div className="absolute left-[-10%] top-[-50%]">
          <ShadowSvg />
        </div>
        <Information />
        <div className="absolute right-[-5%] rotate-180 top-[0%]">
          <ShadowSvg />
        </div>
      </div>
    </div>
  );
};

export default Page;
