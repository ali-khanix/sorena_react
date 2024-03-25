import OurClients from '../../components/home/our_clients/OurClients';
import Features from '../../components/home/what_do_we_do/Features';

import Hero from './../../components/home/hero/Hero';
import TestimonialsSwiper from '../../components/swiper/TestimonialsSwiper';
import FirstPrimary from '../../components/home/first_primary/FirstPrimary';
import AboutUs from '../../components/home/about_us/AboutUs';

function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <Features />
      <TestimonialsSwiper />
      <FirstPrimary />
      <AboutUs />
    </>
  );
}

export default Home;
