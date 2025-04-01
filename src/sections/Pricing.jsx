import { smallSphere, stars } from "@/assets";
import Heading from "@/components/ui/Heading";
import PricingList from "@/components/ui/PricingList";
import Section from "@/components/ui/Section";
import { LeftLine, RightLine } from "@/design/Pricing";
import React from "react";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <section className="relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt=""
            className="relative z-1"
            width={255}
            height={255}
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={1000}
            height={400}
            alt=""
          />
        </div>

        <Heading
          tag="Get Started with Sleekai"
          title="Pay Once, Use Forever"
          className="text-center"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </section>
    </Section>
  );
};

export default Pricing;
