import ButtonPrimary from '../../buttons/ButtonPrimary';
import './SecondCtaStyle.css';

export default function SecondCta() {
  return (
    <>
      <section className="section-seconda-cta">
        <div className="second-cta">
          <div className="second-cta__image-content">
            <picture className="second-cta__image-container">
              <source
                srcSet="/images/second_cta/second_cta_image_mobile.webp"
                media="(max-width: 744px)"
              />
              <source srcSet="/images/second_cta/second_cta_image_desktop.webp" />
              <img
                src="/images/second_cta/second_cta_image_mobile.webp"
                alt="عکس بیلبورد تبلیغاتی"
                className="second-cta__image"
              />
            </picture>
          </div>
          <div className="second-cta__body-content">
            <div className="second-cta__bg-blur"></div>
            <h2 className="section-title">این میتونه بیلبوردِ شما باشه</h2>

            <p className="description">
              ما چــه می كنيم؟این سئوالیسـت كه به دفعات از ما پرسـیده می شـود ما
              تحقیق می كنیم، ما می نویســـیم، ما ترســیم می كنیم
            </p>

            <ButtonPrimary
              icon="/icons/calling phone icon.svg"
              text="همین حالا تماس بگیرید"
            />
          </div>
        </div>
      </section>
    </>
  );
}
