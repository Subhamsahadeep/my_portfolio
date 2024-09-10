'use client';

export const Organisation = ({
  name,
  url,
}: {
  name: string;
  url: string | undefined;
}) => {
  return url ? (
    <span
      className="cursor-pointer"
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    >
      {name}
    </span>
  ) : (
    <span>{name}</span>
  );
};
