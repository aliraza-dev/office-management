import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-y-0">
        {/* Right side for sm, left otherwise */}
        <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
            Bring Everyone together to build better products
          </h1>

          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simplay for the software teams to plan day-to-day
            tasks while keeping the larger team goals in view
          </p>

          <div className="flex-justify-center md:ustify-start">
            <a
              href="#"
              className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-center text-white hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Left side */}
        <div className="md:w-1/2">
          <Image src={Images.illustrationIntro} alt="Illustration intro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
