import React from "react";
import { TestimonialItem } from "./util";
import Image from "next/image";

const Testimonial: React.FC<TestimonialItem> = (
  testimonialBody: TestimonialItem
) => {
  return (
    <div
      className={`flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3 ${
        testimonialBody.index && testimonialBody.index > 0 && "hidden md:flex"
      }`}
    >
      <Image
        src={testimonialBody.image}
        className="-mt-14 w-16 "
        alt="Avatar 1"
      />
      <h5 className="text-lg font-bold">{testimonialBody.name}</h5>
      <p className="text-sm text-darkGrayishBlue">{testimonialBody.body}</p>
    </div>
  );
};

export default Testimonial;
