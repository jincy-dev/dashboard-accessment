import sidebarLogo from '../../assets/Sidebarlogo.png';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChartBoxLine, RiWallet3Line } from 'react-icons/ri';
import { TbClipboardCheck } from 'react-icons/tb';
import { IoBagCheckOutline } from 'react-icons/io5';
import Logout from './Logout';
import CustomButton from '../common/CustomButton';

const Sidebar = () => {
  return (
    <div className='fixed z-50 bottom-0 w-full sm:relative bg-zinc-900 text-white sm:max-w-24 sm:h-screen h-16 flex sm:flex-col items-center sm:pt-8'>
      <img src={sidebarLogo} alt='sidebarLogo' className='hidden sm:flex' />
      <div className='flex w-full h-full sm:max-w-24 sm:flex-col sm:justify-between grow '>
        <div className='sm:pt-12 h-full sm:h-min w-full items-center justify-center flex sm:flex-col sm:gap-12'>
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
