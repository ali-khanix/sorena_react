import ButtonPrimary from './../buttons/ButtonPrimary';
import './Hero.css';

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

          <ButtonPrimary />
        </div>
      </div>
    </section>
  );
}

export default Hero;
