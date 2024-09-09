import React from "react";

type HeadingProps = {
  name: string;
  styledName: string;
};
const SectionHeading = ({ name, styledName }: HeadingProps) => {
  return (
    <h1 className="text-4xl sm:text-3xl font-semibold mb-0 tracking-wide">
      {name} <span className="text-gradient">{styledName}</span>
    </h1>
  );
};

export default SectionHeading;
