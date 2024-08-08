import { BarChart } from '@mantine/charts';
import { data } from './utils';
import { ComboboxItem, Select } from '@mantine/core';
import { useState } from 'react';

const Activity = () => {
  const [value, setValue] = useState<ComboboxItem | null>({
    value: 'weekly',
    label: 'Weekly',
  });

  return (
    <div className='col-span-12 lg:col-span-8 flex flex-col gap-4 bg-primaryBackground rounded-lg p-4'>
      <div className='flex justify-between'>
        <h2 className='text-xl'>Activity</h2>
        <Select
          className='bg-gray-600'
          data={[
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'yearly', label: 'Yearly' },
          ]}
          value={value ? value.value : null}
          onChange={(_value, option) => setValue(option)}
        />
      </div>
      <div>
        <BarChart
          h={300}
          data={data}
          dataKey='week'
          barProps={{ radius: 10 }}
          yAxisProps={{ width: 80 }}
          series={[{ name: 'Orders', color: 'violet.6' }]}
        />
      </div>
    </div>
  );
};

export default Activity;
