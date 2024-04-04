import { Outlet } from 'react-router-dom';
import Navbar from './../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
