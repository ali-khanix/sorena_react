import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import Testimonials from '../home/testimonials/Testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TestimonialsSwiperStyle.css';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

export default function TestimonialsSwiper() {
  return (
    <>
      <div className="testimonials-headings">
        <span className="english-title">?Whay clients say about us</span>
        <h2 className="section-title">مشتریان درباره ما چه میگویند؟</h2>
      </div>
      <Swiper
        className="swiper-testimonials"
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log('Slide Changed')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        navigation={{
          nextEl: '.arrow-left',
          prevEl: '.arrow-right',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Testimonials
            comment={`تبلیغات بیلبورد شما واقعاً جلب توجه ما را کسب کرد! طراحی جذاب
          و پیام مختصر به نحوی بود که ما را به خرید واقعاً ترغیب کرد.`}
            profileImage={
              '/images/testimonials/testimonial_user_profile_image.webp'
            }
            profileName={'محمد بختیاری'}
            profileTitle={'مدیر روابط عمومی ایوان'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            comment={`من به تمام صاحبان کسب و کار و شرکت‌هایی که به دنبال ارتقای سطح تبلیغات و بازاریابی خود در سطح ملی هستند، قویاً توصیه می‌کنم که از خدمات شرکت سورنا استفاده نمایند.`}
            profileImage={'/images/testimonials/testimonials profile_2.webp'}
            profileName={'علیرضا جعفری تفرشی'}
            profileTitle={'بنیان گذار بازرگانی آنیل'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            comment={`قیمت خدمات شرکت سورنا در مقایسه با سایر شرکت‌های فعال در این زمینه بسیار مناسب و مقرون به صرفه است.`}
            profileImage={'/images/testimonials/testimonials profile.webp'}
            profileName={'علیرضا رشیدنیا'}
            profileTitle={'نماینده فروش آجر نماچین'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            comment={`قیمت خدمات شرکت سورنا در مقایسه با سایر شرکت‌های فعال در این زمینه بسیار مناسب و مقرون به صرفه است.`}
            profileImage={'/images/testimonials/testimonials profile.webp'}
            profileName={'علیرضا رشیدنیا'}
            profileTitle={'نماینده فروش آجر نماچین'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            comment={`قیمت خدمات شرکت سورنا در مقایسه با سایر شرکت‌های فعال در این زمینه بسیار مناسب و مقرون به صرفه است.`}
            profileImage={'/images/testimonials/testimonials profile.webp'}
            profileName={'علیرضا رشیدنیا'}
            profileTitle={'نماینده فروش آجر نماچین'}
          />
        </SwiperSlide>

        <div className="navigations">
          <div className="arrows">
            <button className="arrow-right arrow">
              <ArrowRightLineIcon />
            </button>
            <button className="arrow-left arrow">
              <ArrowLeftLineIcon />
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
}
