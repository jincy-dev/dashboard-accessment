import Activity from './Activity';
import Feedback from './Feedback';
import NetProfit from './NetProfit';
import QuickLinks from './QuickLinks';
import RecentOrders from './RecentOrders';
import TotalValues from './TotalValues';

const Contents = () => {
  return (
    <div className='grid grid-cols-12 grid-flow-row-dense gap-4 px-4 overflow-auto pb-16 mb-36'>
      <TotalValues />
      <Activity />
      <RecentOrders />
      <NetProfit percentageType='increase' value={70} percentage={3} />
      <QuickLinks />
      <Feedback />
    </div>
  );
};

export default Contents;
