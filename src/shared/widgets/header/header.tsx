import LinkIcon from "@/assets/icons/link-icon";
import { Logo } from "@/configs/constants";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex p-6 absolute z-10 top-0 left-0 items-center justify-between">
      <Logo />
      <Link href={"/"} className="flex items-center gap-[6px]">
        <div>
          <LinkIcon />
        </div>
        <span className="text-[#FFFFFF] text-[22px] font-medium font-Inter">
          Espace client
        </span>
      </Link>
    </div>
  );
};

export default Header;
