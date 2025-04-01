import { pricing } from "@/constants";
import React from "react";
import Button from "./Button";
import { check } from "@/assets";

const PricingList = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`${
            item.title === "Premium"
              ? "h-[115%] relative -top-4 py-10"
              : " py-8"
          } h-full bg-n-8 px-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-[#ad6aff] hover:text-white justify-between items-center border-n-6 border text-center flex flex-col`}
        >
          <h2 className="h5 font-bold mb-4">{item.title}</h2>
          <p>{item.description}</p>

          <div className="flex text-3xl">
            {item.price && (
              <>
                <div>$</div>
                <span>{item.price}</span>
              </>
            )}
          </div>

          <Button
            className="max-w-[80%] md:w-full mb-6"
            href={item.price ? "/pricing" : "#"}
            white={item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-3 mb-2 text-left mt-5 items-center"
              >
                <img src={check} width={25} height={25} alt="Check" />
                <p className="body-2 text-n-1/50 ">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default PricingList;
