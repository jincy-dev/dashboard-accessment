import { Text } from '@mantine/core';
import { ReactNode } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  iconColor: string;
  icon: ReactNode;
  text: string;
};

const QuikLinkItem = ({ iconColor, icon, text }: Props) => {
  return (
    <div className='flex justify-between w-full items-center'>
      <div className='flex items-center gap-4'>
        <div
          style={{ backgroundColor: iconColor + '55', color: iconColor }}
          className={` w-16 h-16 rounded-full flex justify-center items-center`}
        >
          {icon}
        </div>
        <Text size='xl'>{text}</Text>
      </div>
      <button className=' bg-gray-500  rounded-full p-2'>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default QuikLinkItem;
