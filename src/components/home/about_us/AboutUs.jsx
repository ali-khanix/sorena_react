import './AboutUsStyle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';
import ErrorWarning from 'remixicon-react/ErrorWarningLineIcon';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <section className="section-about-us">
        <div className="about-us">
          <div className="about-us__headings">
            <span className="english-title">About Us</span>
            <h2 className="section-title">درباره ما</h2>
          </div>

          <div className="about-us__content">
            <div className="about-us__video-content">
              <Swiper
                className="about-us__swiper"
                spaceBetween={30}
                modules={[Autoplay, Navigation, Pagination, Scrollbar]}
                navigation={{
                  nextEl: '.arrow-left',
                  prevEl: '.arrow-right',
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <video
                    src="/videos/video_2024-03-24_18-05-22.mp4"
                    controls
                    muted
                    className="about-us__video"
                  ></video>
                </SwiperSlide>
                <SwiperSlide>
                  <video
                    src="/videos/کلیپ و تیزر تبلیغاتی مجموعه سورنا مهر البرز.mp4"
                    controls
                    muted
                    className="about-us__video"
                  ></video>
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
            </div>
            <div className="about-us__data-content">
              <p className="description">
                کانون تبلیغاتی سورنا مهر البرز <strong>(خانه بیلبورد)</strong>{' '}
                با مجوز رسمی از وزارت فرهنگ و ارشاد اسلامی که فعالیت خود را از
                سالِ 1385 انحصارا در خصوصِ تبلیغاتِ محیطی با مدیریت عامل جنابِ
                آقای علیرضا قلیچ تاسیس گردید.
                <br />
                این کانون با دارا بودنِ بیش از 5 هزار متر فضای تبلیغاتی که شاملِ
                عرشه پل و بیلبوردهای تبلیغاتی در محور های مواصلاتی کل کشور
                میباشد، آماده ی خدمات رسانی و ارائه کمپین های تبلیغاتی به شما
                عزیزان میباشد.
                <br />
              </p>

              <Link className="btn-primary" to="about-us">
                <Button
                  className="btn-mui"
                  variant="outlined"
                  size="large"
                  style={{
                    fontSize: '1.6rem',
                    fontFamily: 'iran yekan',
                    padding: '1.6rem 3rem',
                    fontWeight: '700',
                    borderRadius: '1rem',
                  }}
                >
                  بیشتر درباره ما بخوانید...
                  <ErrorWarning
                    style={{
                      marginRight: '.5rem',
                    }}
                  />
                </Button>
              </Link>
            </div>
          </div>

          <div className="about-us__images">
            <Swiper
              spaceBetween={30}
              modules={[Autoplay, Navigation, Pagination, Scrollbar]}
              navigation={{
                nextEl: '.arrow-left',
                prevEl: '.arrow-right',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              scrollbar={{ draggable: true }}
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
              <SwiperSlide className="about-us__images-slide">
                <img src="/images/about us/aboutUs1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about-us__images-slide">
                <img src="/images/about us/aboutUs2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about-us__images-slide">
                <img src="/images/about us/aboutUs3.webp" alt="" />
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
          </div>
        </div>
      </section>
    </>
  );
}
