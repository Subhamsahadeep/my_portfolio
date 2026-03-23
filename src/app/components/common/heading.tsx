'use client';
import { SectionHeading } from './section-heading';

type HeadingProps = {
  name: string;
};

const Heading = ({ name }: HeadingProps) => {
  return <SectionHeading title={name} />;
};

export default Heading;
