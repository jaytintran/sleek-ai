import React from "react";
import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Navbar";

function Home() {
  return (
    <div>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </div>
  );
}

export default Home;
