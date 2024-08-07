import sidebarLogo from '../../assets/Sidebarlogo.png';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChartBoxLine, RiWallet3Line } from 'react-icons/ri';
import { TbClipboardCheck } from 'react-icons/tb';
import { IoBagCheckOutline } from 'react-icons/io5';
import Logout from './Logout';
import CustomButton from '../common/CustomButton';

const Sidebar = () => {
  return (
    <div className='bg-zinc-900 text-white min-w-24 h-screen flex flex-col items-center pt-8'>
      <img src={sidebarLogo} alt='sidebarLogo' />{' '}
      <div className='flex w-full flex-col justify-between grow'>
        <div className='pt-20  w-full items-center justify-center flex flex-col gap-16'>
          <CustomButton active>
            <AiFillHome size={24} />
          </CustomButton>
          <CustomButton>
            <RiBarChartBoxLine size={24} />
          </CustomButton>
          <CustomButton>
            <TbClipboardCheck size={24} />
          </CustomButton>
          <CustomButton>
            <RiWallet3Line size={24} />
          </CustomButton>
          <CustomButton>
            <IoBagCheckOutline size={24} />
          </CustomButton>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
