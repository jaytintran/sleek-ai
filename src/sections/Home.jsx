import React from "react";
import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Collab from "@/sections/Collab";
import Service from "@/sections/Services";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] container mx-auto max-w-7xl">
        <Hero />
        <Benefits />
        <Collab />
        <Service />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </div>
  );
}

export default Home;
