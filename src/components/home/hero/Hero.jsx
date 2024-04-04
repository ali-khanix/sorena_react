import { Button } from '@mui/material';
import ButtonPrimary from './../../buttons/ButtonPrimary';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <picture className="hero__picture">
          {/* <source
            srcSet="/images/hero/hero_mobile.webp"
            media="(max-width: 430px)"
          />
          <source srcSet="" />
          <source srcSet="" /> */}
          <img
            src="/images/hero/hero1.webp"
            alt="عکس بیلبورد در قزوین"
            className="hero__image"
          />
        </picture>

        <div className="hero__content">
          <h1 className="heading-primary">
            خانه بیلبورد
            <br />
            <span>برای معرفی برند شما</span>
          </h1>

          <p className="sub-heading">
            ما به شما مشاوره میدهیم با توجه به شغل و خدماتِ شما، مناسب ترین
            فضاهایِ تبلیغاتی در بهترین لوکیشن ها را انتخاب کنید.
          </p>

          <div className="hero__cta-buttons">
            <ButtonPrimary
              text={'همین حالا تماس بگیرید'}
              icon="/icons/calling phone icon.svg"
              alt="آیکون تماس با مدیر عاملِ سورنا"
            />

            {/* <Button
              variant="contained"
              size="large"
              style={{
                fontSize: '1.6rem',
                fontFamily: 'iran yekan',
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                borderRadius: '1rem',
                padding: '1.6rem 3rem',
              }}
            >
              <span>همین حالا تماس بگیرید</span>
              <img src="/icons/calling phone icon.svg" alt="" />
            </Button> */}

            <Link to="/media-list">
              <Button
                className="btn-mui"
                variant="outlined"
                size="medium"
                style={{
                  fontSize: '1.6rem',
                  fontFamily: 'iran yekan',
                  padding: '1.6rem 3rem',
                  fontWeight: '700',
                  borderRadius: '1rem',
                  width: '100%',
                }}
              >
                لیستِ رسانه ها
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
