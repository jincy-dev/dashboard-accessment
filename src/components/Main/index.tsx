import Contents from './Contents';
import Header from './Header';

const MainBody = () => {
  return (
    <div className='flex flex-col grow container mx-auto max-h-screen'>
      <Header />
      <Contents />
    </div>
  );
};

export default MainBody;
