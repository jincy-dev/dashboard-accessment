import { ReactNode } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

type StatusCardProps = {
  title: string;
  value: string;
  percentage: string;
  percentageType: 'increase' | 'decrease';
  icon: ReactNode;
  iconColor?: string;
};

const StatusCard = ({
  title,
  value,
  percentage,
  icon,
  iconColor,
  percentageType,
}: StatusCardProps) => {
  return (
    <div className='bg-primaryBackground flex flex-col gap-3 p-4 rounded-lg'>
      <div
        style={{ backgroundColor: iconColor + '55', color: iconColor }}
        className={` w-12 h-12 rounded-xl flex justify-center items-center`}
      >
        {icon}
      </div>
      <div>{title}</div>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-3xl'>{value}</div>
        <div
          className={`flex ${
            percentageType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {percentageType === 'increase' ? (
            <MdOutlineArrowDropUp size={24} />
          ) : (
            <MdOutlineArrowDropDown size={24} />
          )}
          <p>{percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
