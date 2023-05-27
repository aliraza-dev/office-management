import React, { Fragment } from "react";

interface ItemsList {
  readonly heading: string;
  readonly body: string;
  readonly index: number;
}

const ListItems: React.FC<ItemsList> = ({
  heading,
  body,
  index,
}: ItemsList) => {
  return (
    <Fragment>
      <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
              {index}
            </div>
            <h3 className="md:md-4 text-base font-bold md:hidden">{heading}</h3>
          </div>
        </div>

        <div>
          <h3 className="mb-4 hidden text-lg font-bold md:block">{heading}</h3>

          <p className="text-darkGrayishBlue">{body}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItems;
