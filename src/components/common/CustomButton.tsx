import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  active?: boolean;
};

const CustomButton = ({
  className,
  children,
  active = false,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={`px-4 flex justify-center h-full sm:h-min items-center w-full  hover:text-[#7395ff] transition-colors ${
        active ? 'text-[#7395ff] border-b-4 sm:border-b-0 sm:border-l-4 border-[#7395ff]' : 'white'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
