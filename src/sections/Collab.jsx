import { brainwaveSymbol, check } from "@/assets";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { collabApps, collabContent, collabText } from "@/constants";
import React from "react";

const Collab = () => {
  return (
    <Section id="collaboration">
      <div className="container mx-auto max-w-7xl flex flex-col items-center px-6">
        <Heading
          title="Seamless Collaboration for a Better Future!"
          subtitle="Made for Collaborators, by Collaborators."
          className="text-center"
        />

        <div className="flex flex-col-reverse justify-between gap-10 lg:flex-row items-start">
          {/* Left Section: List of Features */}
          <ul className="max-w-md w-full mt-10 lg:mt-0 lg:max-w-[22rem]">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3 last:mb-0">
                <div className="flex items-center">
                  <img src={check} alt="check" width={25} height={25} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
            <Button className="mt-5 w-full md:w-fit">Try It Now</Button>
          </ul>

          {/* Right Section: Visual + Text */}
          <div className="flex flex-col items-center lg:ml-auto w-[full]mt-5 lg:mt-0 text-center">
            <p className="body-2 mb-6 text-n-4 max-w-[22rem] lg:max-w-[28rem] xl:max-w-[38rem]  md:mb-10 lg:w-[32rem] lg:mx-auto">
              {collabText}
            </p>

            {/* Circular App Layout */}
            <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 aspect-square border border-n-6 rounded-full overflow-hidden flex items-center mx-auto lg:mx-0">
              <div className="m-auto border border-n-6 rounded-full w-40 sm:w-48 flex aspect-square">
                <div className="w-16 sm:w-20 aspect-square bg-conic-gradient m-auto p-1 rounded-full">
                  <div className="flex justify-center h-full bg-n-8 rounded-full">
                    <img src={brainwaveSymbol} alt="" width={50} height={50} />
                  </div>
                </div>
              </div>

              {/* Circular Icon Layout */}
              <ul className="absolute inset-0 flex items-center justify-center">
                {collabApps.map((app, index) => {
                  const totalApps = collabApps.length;
                  const angle = index * (360 / totalApps);
                  return (
                    <li
                      key={index}
                      className="absolute w-6 sm:w-8"
                      style={{
                        transform: `rotate(${angle}deg) translate(6rem) rotate(-${angle}deg)`,
                      }}
                    >
                      <img src={app.icon} className="w-full h-full" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collab;
