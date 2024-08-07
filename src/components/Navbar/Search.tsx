import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='w-80 h-12 border-border1 border-2 items-center justify-center flex rounded-md my-auto px-2 gap-2'>
      <div>
        <IoSearch className='aspect-square flex' size={24} />
      </div>
      <input
        className='grow items-center flex bg-transparent  focus:outline-none'
        placeholder='Search'
      />
    </div>
  );
};

export default Search;
