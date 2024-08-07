import Action from './Action';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='h-24 bg-zinc-900  text-white flex justify-between pl-7 pr-7'>
      <Search />
      <Action />
    </div>
  );
};

export default Navbar;
