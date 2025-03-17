'use client'
import LinkIconButton from "@/assets/icons/link-icon-button";
import WorldSvg from "@/assets/svgs/world-svg";
import Input from "@/shared/components/input";
import React from "react";

const Information = () => {
  return (
    <div className="relative z-20 mt-10 pb-20 flex justify-center items-center px-6">
      <div className="absolute left-0 top-0 opacity-[.7]">
        <WorldSvg />
      </div>
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-5xl font-Poppins font-medium text-center mb-8">
          Demande d’information
        </h2>

        {/* information form */}
        <form
          onSubmit={(e: any) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Input label="Nom" placeholder="Votre nom" />
          <Input label="Prénom" placeholder="Votre prénom" />
          <Input label="Email" placeholder="email@example.com" type="email" />
          <Input
            label="Nom de l'entreprise"
            placeholder="Le nom de votre entreprise"
          />
          <Input label="Type de votre business" placeholder="Type" />
          <Input label="SIRET" placeholder="45637XXXXXXXX" />
          <Input
            label="Chiffre d'affaire"
            placeholder="10000000"
            type="number"
          />
          <Input label="Pays" placeholder="France" />
          <Input
            label="Numéro de téléphone"
            placeholder="(+33) 675 763 445"
            type="tel"
          />
          <button className="w-[219px] mt-6 bg-gradiant h-[65px] border-2 border-[#42a3ff] rounded-[85px] flex items-center justify-center gap-3">
            <span className="bg-button-text-gradient text-white text-gradient text-transparent bg-clip-text text-[20px] font-Poppins font-medium">
              Envoyer
            </span>
            <LinkIconButton />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Information;
