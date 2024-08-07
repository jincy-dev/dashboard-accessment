import CenterComponents from './CenterComponents';
import Sidebar from './Sidebar/Sidebar';

const MainPage = () => {
  return (
    <>
      <div className='flex bg-slate-800 max-h-screen overflow-hidden'>
        <Sidebar />
        <CenterComponents />
      </div>
    </>
  );
};

export default MainPage;
