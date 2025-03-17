import QuotesIcon from "@/assets/icons/quotes-icon";
import SupportModulesCharacter from "@/assets/svgs/support-modules-characters";
import { Logo } from "@/configs/constants";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="text-[#dcdcdc] text-5xl font-Poppins font-semibold">
          Nos clients
        </p>
      </div>
      <div className="flex justify-center">
        <SupportModulesCharacter />
      </div>
      <div className="md:w-[75%] m-auto">
        <div className="w-full p-6 mt-10 bg-[#171823] rounded-xl shadow-xl">
          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <div className="md:px-8 my-4 px-4 flex justify-between">
            <QuotesIcon />
            <QuotesIcon />
          </div>
          <div className="md:px-10 px-4">
            <p className="font-Poppins text-xl font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex my-4 gap-3 justify-center w-full">
            <Image
              src={"https://avatar.iran.liara.run/public/girl"}
              alt=""
              width={50}
              height={50}
            />
            <div>
              <h5 className="text-lg font-Poppins font-semibold">
                Herman Jensen
              </h5>
              <h6 className="text-sm font-Poppins">CEO MyPay</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
