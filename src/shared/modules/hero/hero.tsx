import LinkIconButton from "@/assets/icons/link-icon-button";
import HeroCharacter from "@/assets/svgs/hero-character";
import HeroHandCharacter from "@/assets/svgs/hero-hand-character";
import SupportModulesCharacter from "@/assets/svgs/support-modules-characters";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full px-2 md:px-10 h-[90vh] md:flex items-center bg-hero-gradiant relative">
        <div className="md:w-[50%] w-full relative z-10">
          <h1 className="font-Poppins font-[700] text-5xl leading-[70.5px]">
            <span className="bg-text-gradiant text-transparent bg-clip-text">
              MyPay
            </span>{" "}
            Plateforme de gestion de paiements en ligne pour business High-Risk.
          </h1>
          <p className="w-full md:w-[75%] font-Poppins text-sm text-[#e1e1e1] font-medium">
            Business High-Risk pris en charge : Servitia Financia et
            Investitiones , Mercator es titulorum Pecuniae mutuatae ad diem
            Mercatores cryptae valutarum. Servitia Financia et Investitiones ,
            Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
            valutarum.
          </p>
          {/* COMMENCER button */}
          <Link
            href={"/"}
            className="w-[219px] h-[65px] border-2 border-[#42a3ff] mt-5 rounded-[85px] flex items-center justify-center gap-3"
          >
            <span className="bg-button-text-gradiant text-transparent bg-clip-text text-[20px] font-Poppins font-medium">
              COMMENCER
            </span>
            <LinkIconButton />
          </Link>
        </div>
        <div className="md:w-[50%] w-full flex justify-center relative z-10">
          <HeroCharacter />
          <div className="absolute right-[-5%] top-[50%]">
            <HeroHandCharacter />
          </div>
        </div>
      </div>
      {/* Supports modules*/}
      <div className="bg-[#00020D]">
        <div className="text-center">
          <p className="text-[#DCDCDC] text-3xl font-Poppins font-semibold">
            Nos supports de paiement
          </p>
        </div>
        <div className="flex justify-center">
          <SupportModulesCharacter />
        </div>
      </div>
    </>
  );
};

export default Hero;
