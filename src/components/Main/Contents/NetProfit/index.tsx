import { RingProgress, Text } from '@mantine/core';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

type NetProfitProps = {
  percentage: number;
  percentageType: 'increase' | 'decrease';
  value: number;
};
const NetProfit = ({ percentageType, percentage, value }: NetProfitProps) => {
  return (
    <div className='col-span-4 items- justify-between flex gap-4 bg-primaryBackground rounded-lg p-4'>
      <div className='flex flex-col justify-between'>
        <div>Net Profit</div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-3xl'>$ 6959.25</div>
        </div>
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
          <span>{percentage}%</span>
        </div>
      </div>
      <div className='flex items-center'>
        <RingProgress
          sections={[{ value, color: 'blue' }]}
          label={
            <>
              <Text c='white' fw={700} ta='center' size='lg'>
                70%
              </Text>
              <Text
                c='white'
                fw={100}
                ta='center'
                style={{
                  fontSize: '0.5rem',
                }}
              >
                Goal
                <br />
                completed
              </Text>
            </>
          }
        />
      </div>
    </div>
  );
};

export default NetProfit;
