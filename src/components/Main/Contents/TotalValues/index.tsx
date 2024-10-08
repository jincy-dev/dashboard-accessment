import StatusCard from './StatusCard';
import { data } from './utils';

const TotalValues = () => (
  <div className='col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
    {data.map((item, index) => (
      <StatusCard
        key={index}
        title={item.title}
        value={item.value}
        percentage={item.percentage}
        percentageType={item.percentageType}
        iconColor={item.iconColor}
        icon={item.icon}
      />
    ))}
  </div>
);

export default TotalValues;
