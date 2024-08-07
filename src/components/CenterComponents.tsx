import MainBody from './Main';
import Navbar from './Navbar';

const CenterComponents = () => {
  return (
    <div className='min-h-screen bg-black grow text-white'>
      <Navbar />
      <MainBody />
    </div>
  );
};

export default CenterComponents;
