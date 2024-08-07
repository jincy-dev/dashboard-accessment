import { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`${
        children === 'Delivered'
          ? 'bg-emerald-800 text-emerald-500'
          : 'bg-red-900 text-red-400'
      } px-3 py-0 rounded-full`}
    >
      {children}
    </div>
  );
};

export default Tag;
