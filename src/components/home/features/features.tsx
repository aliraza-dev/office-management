import React from "react";
import ListItems from "./list-items";

interface ItemsList {
  readonly heading: string;
  readonly body: string;
}

const Features: React.FC = () => {
  const listItems: Array<ItemsList> = [
    {
      heading: "Track company wide progress",
      body: "Manage provides all the functionality your team needs, without the complexity. Our software is tailo-mage for modern digital product teams",
    },
    {
      heading: "All time support",
      body: "Feel free to call us any time you want, our team is available 24/7",
    },
    {
      heading: "Flexible Pricing",
      body: "Our pricings are flexible per customer",
    },
  ];

  return (
    <section>
      <div className="mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0 ">
        {/* Left Side */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
            { `What's different about Manage?` }
          </h2>

          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailo-mage for modern digital product
            teams
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* Heading */}

          {listItems &&
            listItems.map((list, index) => (
              <ListItems key={index} {...list} index={index + 1} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
