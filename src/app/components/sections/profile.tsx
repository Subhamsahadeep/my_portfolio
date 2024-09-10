import Image from 'next/image';
import myImage from '../../../../assets/profile.jpg';
export const Profile = () => {
  return (
    <>
      <div className="relative">
        <div className="glow-effect" />
        <div className="relative z-10">
          <Image
            src={myImage}
            alt="My Image"
            className="w-32 h-32 rounded-full mb-4"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-2">Subham Saha</h2>

      <p className="text-gray-400 text-center">
        I am a Senior Software Engineer based in{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
          Bengaluru
        </span>
        , India.
      </p>
    </>
  );
};
