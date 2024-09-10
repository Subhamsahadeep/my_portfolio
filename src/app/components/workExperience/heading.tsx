import { TimelineHeadingProps } from './experience';

export const TimelineHeading = ({ item }: { item: TimelineHeadingProps }) => {
  return (
    <>
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-700 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-gray-400 border border-gray-500" />
        </div>
        <div>
          <h3 className="hidden md:block text-4xl md:pl-20 md:text-3xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {item.organisation}
          </h3>
          <div className="hidden md:block text-md md:pl-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            {item.designation}
            <div className="text-transparent bg-clip-text bg-gradient-to-r text-gray-200">
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
