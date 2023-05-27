import React, { useState } from "react";
import Image from "next/image";
import { Images } from "@/assets/";

export const Nav: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <nav className={"container relative mx-auto p-6"}>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* {Images.brandIcon} */}
          <Image src={Images.brandIcon} alt="Error" />
        </div>

        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        <a
          href="#"
          className=" baseline hidden rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        <button
          id="menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${ mobileMenu && 'open' } hamburger block focus:outline-none md:hidden`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute left-6 right-6 mt-10 flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center ${ mobileMenu ? 'flex' : 'hidden' }`}
        >
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};
