import React from 'react';

type HeadingProps = {
  name: string;
  styledName: string;
};
const SectionHeading = ({ name, styledName }: HeadingProps) => {
  return (
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-0 tracking-wide">
      {name} <span className="text-gradient">{styledName}</span>
    </h1>
  );
};

export default SectionHeading;
