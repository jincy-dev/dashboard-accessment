import CustomButton from '../common/CustomButton';
import { IoMdLogOut } from 'react-icons/io';


const Logout = () => {
  return (
    <CustomButton className='py-8'>
      <IoMdLogOut size={24} />
    </CustomButton>
  );
};

export default Logout;
