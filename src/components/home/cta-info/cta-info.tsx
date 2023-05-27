import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-brightRed custom-cta">
      <div className="mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
        </h2>

        <div className="">
            <a
                href="#"
                className="baseline rounded-full bg-white p-3 px-6 pt-2 text-center text-brightRed hover:bg-gray-700 shadow-2xl"
            >
                Get Started
            </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
