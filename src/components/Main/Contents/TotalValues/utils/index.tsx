import { GiDiscGolfBag } from 'react-icons/gi';

export const data: {
  title: string;
  value: string;
  percentage: string;
  percentageType: 'increase' | 'decrease';
  icon: JSX.Element;
  iconColor?: string;
}[] = [
  {
    title: 'Total Orders',
    value: '75',
    percentage: '3%',
    percentageType: 'increase',
    iconColor: '#3b82f6',
    icon: <GiDiscGolfBag size={26} />,
  },
  {
    title: 'Total Delivered',
    value: '70',
    percentage: '3%',
    percentageType: 'decrease',
    iconColor: '#22c55e',
    icon: <GiDiscGolfBag size={26} />,
  },
  {
    title: 'Total Cancelled',
    value: '05',
    percentage: '3%',
    percentageType: 'increase',
    iconColor: '#f43f5e',
    icon: <GiDiscGolfBag size={26} />,
  },
  {
    title: 'Total Revenue',
    value: '$12k',
    percentage: '3%',
    percentageType: 'decrease',
    iconColor: '#ec4899',
    icon: <GiDiscGolfBag size={26} />,
  },
];
