import OurClients from "../../components/home/our_clients/OurClients";
import Features from "../../components/home/what_do_we_do/Features";

import Hero from "./../../components/hero/Hero";
import TestimonialsSwiper from "../../components/swiper/TestimonialsSwiper";

function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <Features />
      <TestimonialsSwiper />
    </>
  );
}

export default Home;
