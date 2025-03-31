import { curve, heroBackground, robot } from "@/assets";
import Button from "@/components/ui/Button";
import CompanyLogos from "@/components/ui/CompanyLogos";
import Generating from "@/components/ui/Generating";
import Notification from "@/components/ui/Notification";
import Section from "@/components/ui/Section";
import { heroIcons } from "@/constants";
import { BackgroundCircles } from "@/design/Navbar";

const Hero = () => {
  return (
    <Section id="hero" className="pt-[12rem] -mt-[5.25rem]">
      {/* 
          Position: relative means that we can use absolute positioning inside it.
          Or it can be positioned relative to its normal position.
      */}
      <div className="container relative">
        {/* ----------------------------------------------------------------------------- */}

        <div className="z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          {/* ----------------------------------------------------------------------------- */}

          {/* Title */}
          <h1 className="h1 mb-6">
            Explore The Possiblities of A.I Conversation with SleekAI
            <span className="inline-block relative">
              SleekAI
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 object-cover"
                width={398}
                height={74}
                alt="Curve"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI to enhance your business and create a better
            future for all.
          </p>

          {/* CTA Button */}
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        {/* 
          Overflow: hidden is used to hide the overflowing content outside the container.
          This ensures that any content that extends beyond the boundaries of the container will not be visible.
          And also we can't scroll in it.
        */}

        {/* Hero Image */}
        <div className="max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 relative">
          <div className="rounded-2xl p-1 bg-conic-gradient z-1 ">
            <div className="bg-n-8 rounded-[1rem] overflow-hidden  aspect-[33/40] md:aspect-[688/500] lg:aspect-[1024/600] scale-x-[-1]">
              <img
                src={robot}
                className="w-full"
                width={1024}
                height={490}
                alt="Hero"
              />
            </div>
          </div>
          <div className="absolute top-0 -z-5 w-[100%] translate-y-[-50%]">
            <img
              src={heroBackground}
              alt=""
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>

          {/* When hover, blur it out */}
          <Generating className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover-blur max-w-[200px] md:max-w-[500px]" />

          <Notification
            className={`absolute right-5 top-1/2 hover-blur hidden md:flex`}
            title={"Notification"}
          />

          <ul className="hidden md:flex absolute items-center justify-between gap-2 left-5 top-1/3 hover-blur bg-n-9/40 rounded-xl py-2">
            {heroIcons.map((icon, index) => (
              <li className="p-5" key={index}>
                <img src={icon} width={24} height={25} alt={icon} />
              </li>
            ))}
          </ul>
        </div>
        <BackgroundCircles className="hidden lg:block" />
        <CompanyLogos className={`hidden lg:block`} />
      </div>
    </Section>
  );
};

export default Hero;
