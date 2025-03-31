import React from "react";
import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Collab from "@/sections/Collab";
import Service from "@/sections/Services";

function Home() {
  return (
    <div>
      <div className="pt-[4.5rem] lg:pt-[5.25rem]">
        <Hero />
        <Benefits />
        <Collab />
        <Service />
      </div>

      <ButtonGradient />
    </div>
  );
}

export default Home;
