"use client";
import LinkIconButton from "@/assets/icons/link-icon-button";
import BackArrow from "@/assets/svgs/back-arrow";
import CallIcon from "@/assets/svgs/call-icon";
import EmailIcon from "@/assets/svgs/email-icon";
import LocationIcon from "@/assets/svgs/location-icon";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSumbit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mb-10 px-2 md:px:10 pt-24 md:pt-28 md:flex bg-hero-gradiant relative">
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <BackArrow />
          </Link>
          <div>
            <h3 className="font-Poppins font-medium text-2xl md:text-4xl lg:text-5xl text-white">
              Contactez-nous
            </h3>
          </div>
          <div></div>
        </div>

        {/* contact form */}
        <div className="w-full md:flex gap-4 min-h-[60vh] p-3 shadow mt-10 bg-[#f3f3f3] rounded-2xl">
          <div className="md:w-[36%] bg-form-gradiant relative h-full min-h-[58vh] rounded-2xl">
            <div className="relative p-3 md:p-8 !py-14 z-10">
              <h3 className="text-2xl font-Poppins font-semibold">
                Informations
              </h3>
              <p className="font-Poppins pt-2 text-sm text-[#BCBCBC]">
                Veuillez trouver ci-dessous nos informations <br /> de contact
              </p>

              <div className="w-full mt-5 py-5 flex items-center gap-4">
                <CallIcon />
                <div>
                  <p className="text-lg font-medium text-[#f7f7f7] font-Poppins">
                    +33 017 797 176
                  </p>
                  <p className="text-lg font-medium text-[#f7f7f7] font-Poppins">
                    +33 017 797 176
                  </p>
                </div>
              </div>

              <div className="w-full py-5 flex items-center gap-4">
                <EmailIcon />
                <div>
                  <Link
                    href="mailto:support@mypay.com"
                    className="text-lg font-medium text-[#F7F7F7] font-Poppins"
                  >
                    Support@mypay.com
                  </Link>
                </div>
              </div>

              <div className="w-full py-5 flex items-center gap-4">
                <LocationIcon />
                <div>
                  <p className="text-lg font-medium text-[#F7F7F7] font-Poppins">
                    Paris,France
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[64%] z-10 pt-[4%]">
            <form
              className="md:w-[90%] m-auto"
              onSubmit={handleSubmit(onSumbit)}
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="font-Poppins text-sm text-[#B0B0B0]">
                    Votre prénom
                  </label>
                  <input
                    {...register("firstName", {
                      required: "Prénom est requis",
                    })}
                    type="text"
                    placeholder="John"
                    className="w-full text-xl font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm pt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-Poppins text-sm text-[#B0B0B0]">
                    Votre nom
                  </label>
                  <input
                    {...register("lastName", {
                      required: "Nom est requis",
                    })}
                    type="text"
                    placeholder="Doe"
                    className="w-full text-xl font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm pt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <label className="font-Poppins text-sm text-[#B0B0B0]">
                  Votre Email
                </label>
                <input
                  {...register("email", {
                    required: "Email est requis",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email invalide",
                    },
                  })}
                  type="email"
                  placeholder="John@doe.com"
                  className="md:w-[47%] block text-xl font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <label className="font-Poppins text-sm text-[#B0B0B0]">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message est requis" })}
                  rows={4}
                  cols={8}
                  placeholder="Ecrivez votre message"
                  className="block w-full text-xl font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-[219px] h-[65px] border-2 border-[#42a3ff] mt-5 rounded-[85px] flex items-center justify-center gap-3"
                >
                  <span className="bg-button-text-gradiant text-transparent bg-clip-text text-[20px] font-Poppins font-medium">
                    ENVOYER
                  </span>
                  <LinkIconButton />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
