import Action from './Action';
import Search from './Search';
import sidebarLogo from '../../assets/Sidebarlogo.png';

const Navbar = () => {
  return (
    <div className='h-24 bg-zinc-900  text-white flex justify-between pl-7 pr-7'>
      <img src={sidebarLogo} alt='sidebarLogo' className='sm:hidden flex h-16 my-auto' />

      <Search />
      <Action />
    </div>
  );
};

export default Navbar;
