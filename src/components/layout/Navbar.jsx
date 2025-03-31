import { sleekai } from "@/assets";
import { navigation } from "@/constants";
import { useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HambugerMenu } from "@/design/Navbar";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    enablePageScroll();
  };

  return (
    <div
      className={`sticky w-full z-50 py-5 border-b lg:bg-n-8/90 lg:backdrop-blur-sm ${
        isMobileNavOpen ? "bg-n-8" : "bg-b-8/90"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="flex items-center font-code uppercase w-[12rem] xl:mr-8"
        >
          <img src={sleekai} alt="logo" width={50} height={50} />
          <span className="ml-1 text-xl font-bold">Sleekai</span>
        </a>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMobileNavOpen ? "flex top-1" : "hidden"
          } fixed ml-auto top-[5rem] left-0 right-0 bottom-0 bg-n-8/90 backdrop-blur-sm lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col justify-center items-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={closeMobileNav}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* <HambugerMenu /> */}
        </nav>

        {/* Desktop Navigation */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button className="ml-auto lg:hidden px-3" onClick={toggleMobileNav}>
          <MenuSvg openNavigation={isMobileNavOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
