import { IoFastFood } from 'react-icons/io5';
import QuikLinkItem from './QuikLinkItem';
import { FiTarget } from 'react-icons/fi';
import { FaBowlFood } from 'react-icons/fa6';

const QuickLinks = () => {
  return (
    <div className='col-span-12 lg:col-span-4 h-min flex flex-col gap-4 bg-primaryBackground rounded-lg p-4'>
      <QuikLinkItem
        iconColor='#ea580c'
        icon={<FiTarget size={26} />}
        text='Goals'
      />
      <QuikLinkItem
        iconColor='#4338ca'
        icon={<FaBowlFood size={26} />}
        text='Popular Dishes'
      />
      <QuikLinkItem
        iconColor='#06b6d4'
        icon={<IoFastFood size={26} />}
        text='Menu'
      />
    </div>
  );
};

export default QuickLinks;
