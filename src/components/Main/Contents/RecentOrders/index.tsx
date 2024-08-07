import Tag from './Tag';
import { data } from './utils';

const RecentOrders = () => {
  return (
    <div className='col-span-8 flex flex-col gap-4 bg-primaryBackground rounded-lg p-4'>
      <div className='flex justify-between'>
        <h2 className='text-xl'>Activity</h2>
      </div>
      <div className='grid grid-cols-12 border-b border-b-gray-700'>
        {Object.keys(data.headers).map((header) => (
          <div key={header} className='col-span-3 font-bold'>
            {data.headers[header]}
          </div>
        ))}
      </div>
      {data.data.map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-12 border-b border-b-slate-700 pb-4'
        >
          <div className='col-span-3 flex gap-2 items-center'>
            <img src={item.image} className='w-8 h-8 rounded-full' />
            {item.customer}
          </div>
          <div className='col-span-3 flex gap-2 items-center'>
            {item.orderNo}
          </div>
          <div className='col-span-3 flex gap-2 items-center'>
            {item.amount}
          </div>
          <div className='col-span-3 flex gap-2 items-center'>
            <Tag>{item.status}</Tag>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrders;
