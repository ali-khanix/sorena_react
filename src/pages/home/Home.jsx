import OurClients from '../../components/home/our_clients/OurClients';
import Features from '../../components/home/what_do_we_do/Features';

import Hero from './../../components/home/hero/Hero';
import TestimonialsSwiper from '../../components/swiper/TestimonialsSwiper';
import FirstPrimary from '../../components/home/first_primary/FirstPrimary';
import AboutUs from '../../components/home/about_us/AboutUs';
import WhyChooseUs from '../../components/home/why_choose_us/WhyChooseUs';
import SecondCta from '../../components/home/second_cta/SecondCta';
import OurServices from '../../components/home/our_services/OurServices';

function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <Features />
      <TestimonialsSwiper />
      <FirstPrimary />
      <AboutUs />
      <WhyChooseUs />
      <SecondCta />
      <OurServices />
    </>
  );
}

export default Home;
