import React from "react";
import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";

function Home() {
  return (
    <div>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Button className="mt-10" href="#login">
          Login
        </Button>
      </div>

      <ButtonGradient />
    </div>
  );
}

export default Home;
