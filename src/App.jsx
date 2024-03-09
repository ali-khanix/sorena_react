import './App.css';
import './assets/components/Navbar';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MediaList from './assets/components/pages/MediaList';
import Services from './assets/components/pages/Services';
import CallUs from './assets/components/pages/CallUs';
import AboutUs from './assets/components/pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/لیست-رسانه-ها" element={<MediaList />} />
          <Route path="/خدمات" element={<Services />} />
          <Route path="/تماس-با-ما" element={<CallUs />} />
          <Route path="/درباره-ما" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
