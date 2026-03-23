'use client';
import React from 'react';
import { ExperienceData } from './details';
import { ExperienceCard } from './content';
import Heading from '../common/heading';

export const Experience = ({ data }: { data: ExperienceData[] }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <Heading name="Work Experience" />
      <div className="relative space-y-16 md:space-y-24">
        {data.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
