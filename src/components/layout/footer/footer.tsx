import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-12 md:flex-row md:space-y-0">

        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div>
                <Image
                    src={Images.logoWhite}
                    alt="Footer logo"
                    className="h-8 w-full"
                />
            </div>

            <div className="flex justify-center space-x-4">
                <a href="#">
                    <Image 
                        src={Images.facebook}
                        alt="Facebook"
                    />
                </a>
                <a href="#">
                    <Image 
                        src={Images.twitter}
                        alt="Twitter"
                    />
                </a>
                <a href="#">
                    <Image 
                        src={Images.instagram}
                        alt="Instagram"
                    />
                </a>
            </div>
        </div>

        <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:brightRed ">Home</a>
                <a href="#" className="hover:brightRed ">Pricing</a>
                <a href="#" className="hover:brightRed ">Products</a>
                <a href="#" className="hover:brightRed ">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:brightRed ">Careers</a>
                <a href="#" className="hover:brightRed ">Community</a>
                <a href="#" className="hover:brightRed ">Privacy Policy</a>
            </div>
        </div>

        <div className="flex flex-col justify-between">
            <form>
                <div className="flex space-x-3">
                    <input type="text" className="flex-1 px-4 rounded-full focus:outline-none"  placeholder="Updates in your inbox"/>
                    <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                        Go
                    </button>
                </div>
            </form>

            <div className="hidden text-white md:block">
                Copyright &copy; 2023
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
