import { TimelineHeadingProps } from './experience';

export const SkillsExperience = ({ item }: { item: TimelineHeadingProps }) => {
  return (
    <>
      {item.content}
      <div className="text-gray-500 text-xs md:text-sm text-right">
        {item.skills}
      </div>
    </>
  );
};
