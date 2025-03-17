"use client";
import AuthCharacter from "@/assets/svgs/auth-character";
import BackArrow from "@/assets/svgs/back-arrow";
import FaceBookIcon from "@/assets/svgs/facebook-icon";
import GoogleIcon from "@/assets/svgs/google-icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      router.push("/login");
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-10 px-2 md:px-10 pt-6 md:flex bg-hero-gradiant relative">
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/login"}>
            <BackArrow />
          </Link>
        </div>

        {/* Signup form */}
        <div className="w-full md:flex gap-4 min-h-[60vh] p-3 shadow mt-10 bg-[#f3f3f3] rounded-2xl">
          <div className="md:w-[36%] bg-form-gradiant relative rounded-2xl">
            <div className="relative h-full w-full flex items-center justify-center z-10">
              <AuthCharacter />
            </div>
          </div>
          <div className="md:w-[64%] z-10 pt-[4%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:w-[80%] lg:w-[70%] m-auto w-[90%]"
            >
              <div>
                <h1 className="text-[#2a3547] font-JakartaSans text-3xl font-semibold">
                  Bienvenue sur MyPay
                </h1>
                <p className="text-[#2a3547] font-JakartaSans text-lg">
                  Votre admin panel
                </p>

                <div className="my-8 flex gap-4 items-center">
                  <GoogleIcon />
                  <FaceBookIcon />
                </div>

                <div className="flex items-center my-5 font-JakartaSans text-sm text-[#5A6A85]">
                  <div className="flex-1 border-t border-[#EAEFF4]" />
                  <span className="px-3">ou</span>
                  <div className="flex-1 border-t border-[#EAEFF4]" />
                </div>

                <div className="my-4">
                  <label className="font-Poppins font-semibold text-sm text-[#2A3547]">
                    Nom d’utilisateur
                  </label>
                  <input
                    type="text"
                    {...register("username", {
                      required: "Le nom d'utilisateur est requis",
                    })}
                    className="w-full px-2 text-lg rounded-lg font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-[#fff] border border-[#EAEFF4] py-2"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm pt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div className="my-4">
                  <label className="font-Poppins font-semibold text-sm text-[#2A3547]">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email est requis",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email invalide",
                      },
                    })}
                    className="w-full px-2 text-lg rounded-lg font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-[#fff] border border-[#EAEFF4] py-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm pt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="my-4">
                  <label className="font-Poppins font-semibold text-sm text-[#2A3547]">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Mot de passe est requis",
                      minLength: {
                        value: 6,
                        message:
                          "Le mot de passe doit comporter au moins 6 caractères",
                      },
                    })}
                    className="w-full px-2 text-lg rounded-lg font-Poppins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-[#fff] border border-[#EAEFF4] py-2"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm pt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full rounded-lg bg-[#5D87FF] h-[55px] my-10"
                  >
                    <span className="text-xl text-white font-Poppins font-medium">
                      {loading ? "..." : "Créer un compte"}
                    </span>
                  </button>
                  {errorMessage && (
                    <p className="text-red-500 pt-1">{errorMessage}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
