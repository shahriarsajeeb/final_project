import RightMarkIcon from "@/assets/icons/right-mark.icon";
import PaymentMethodCard from "@/assets/svgs/payment-method-card";
import React from "react";

const Pricing = () => {
  const benefits = [
    "Transactions e-commerce",
    `Services basés sur l'abonnement`,
    "Dons en ligne pour des associations à but non lucratif",
    "Paiements de réservations et de réservations",
    "Vente de produits numériques",
  ];

  const benefits2 = [
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
  ];

  return (
    <div className="py-10">
      <h1 className="text-5xl font-Poppins text-center font-medium text-white">
        Choisissez votre pack & Abonnez-vous
      </h1>
      <p className="font-Poppins text-lg text-center text-[#e1e1e1] py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      {/* pricing box */}
      <div className="w-[95%] flex my-6 m-auto">
        <div className="w-[55%] h-max relative z-40 bg-white/20 rounded-xl bg-clip-padding backdrop-blur-[100px] border-2 border-[#4b85FC] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-[#4b86coe] before:to-[#75f2f631] before:-z-10">
          <div className="p-6">
            <div className="w-full text-center">
              <button className="bg-gradient-to-r text-[#000] h-[54px] w-[173px] rounded-[30px] from-[#4b86fc] text-lg font-JakartaSans font-[600] to-[#75f2f6]">
                STANDARD
              </button>
            </div>
            <div className="w-full flex justify-center my-5">
              <PaymentMethodCard />
            </div>
            <h3 className="text-center bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent font-bold text-5xl py-3 font-Poppins">
              5% + 0.25 €
            </h3>
            <div className="w-[90%] m-auto">
              <span className="font-Poppins block pt-4 text-white text-lg font-bold">
                Business Acceptés :
              </span>
            </div>
            {benefits.map((i: string, index: number) => (
              <div className="py-4 flex items-center gap-2" key={index}>
                <RightMarkIcon />
                <span className="font-Poppins font-medium text-[#f7f7f7] text-lg">
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[#07111e] w-full cursor-pointer h-[86px] flex items-center justify-center rounded-xl">
            <span className="text-white text-[28px] font-Poppins font-medium">
              Démarrer
            </span>
          </div>
        </div>
        <div className="w-[45%] ml-[-2%] mt-[-1.5%] bg-hero-gradiant relative rounded-xl">
          <div className="p-6 w-full relative z-20">
            <div className="w-full text-center">
              <button className="bg-gradient-to-r text-black h-[54px] w-[173px] rounded-[30px] from-[#4B86FC] text-lg font-JakartaSans font-[600] to-[#75F2F6]">
                SUR MESURE
              </button>
              <h3 className="py-5 bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent text-lg font-Poppins font-bold">
                Dix fonctionnalités essentielles
              </h3>
            </div>
            <div className="md:pl-10">
              {benefits2.map((i: string, index: number) => (
                <div
                  key={index}
                  className="w-full py-4 flex items-center gap-2"
                >
                  <RightMarkIcon />
                  <span className="font-Poppins font-medium text-[#f7f7f7] text-lg">
                    {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
