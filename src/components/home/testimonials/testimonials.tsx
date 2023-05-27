import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { TestimonialItem } from "./util";
import Testimonial from "./testimonial";

const Testimonials: React.FC = () => {
  const testimonials: Array<TestimonialItem> = [
    {
      image: Images.avatar1,
      name: "Avatar1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eveniet dicta aliquid voluptates",
    },
    {
      image: Images.avatar2,
      name: "Avatar2",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eveniet dicta aliquid voluptates",
    },
    {
      image: Images.avatar3,
      name: "Avatar2",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eveniet dicta aliquid voluptates",
    },
  ];

  return (
    <section>
      <div className="px-t mx-auto mt-10 mt-32 max-w-6xl text-center ">
        <h1 className="text-center text-4xl font-bold">
          Whats different about manage
        </h1>

        {/* testimonials */}
        <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
          {testimonials &&
            testimonials.map((monial, index) => (
              <Testimonial key={index} index={index} {...monial} />
            ))}
        </div>

        <div className="my-16">
          <a
            href="#"
            className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-center text-white hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
