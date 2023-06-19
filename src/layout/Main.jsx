import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Main = () => {
  return (
    <div
      className='relative mx-auto xl:px-10 md:px-5 sm:px-2 px-1'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;