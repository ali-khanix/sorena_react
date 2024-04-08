import { Link } from 'react-router-dom';
import ButtonMui from '../../components/buttons/ButtonMui';
import PagesHero from '../../components/pages_hero/PagesHero';
import './ServicesStyle.css';

function Services() {
  return (
    <>
      <PagesHero />
      <section className="services-section section-design">
        <div className="service service-design">
          <div className="service__body-content">
            <p className="english-title">Brand Identity Design</p>
            <h2 className="section-title">طراحی هویت برند (دیزاین)</h2>
            <p className="description">
              در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
              برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده از دانش و
              تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا هویت بصری متمایز
              و جذابی برای برند خود ایجاد کنید.
            </p>
          </div>

          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/pages/our_services_page/brand_identity_deisgn_image.webp"
                alt=""
                className="service__image"
              />
            </div>

            <div className="service__icon-container">
              <img src="/icons/our_services/fountain_pen.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-env-ads">
        <div className="env-ads">
          <div className="env-ads__headings">
            <p className="english-title">Environmental Advertising</p>
            <h2 className="section-title">تبلیغات محیطی</h2>
          </div>

          <div className="env-ads__body">
            <div className="env-ads__body-content">
              <div className="env-ads__image-container">
                <img
                  src="/images/pages/our_services_page/ghazvin_billboard_img.webp"
                  alt="بیلبورد قزوین"
                  className="end-ads__img"
                />
              </div>

              <div className="env-ads__data-description">
                <p className="description">
                  در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای
                  اساسی برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده
                  از دانش و تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا
                  هویت بصری متمایز و جذابی برای برند خود ایجاد کنید.
                </p>

                <p className="description">
                  در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای
                  اساسی برای شناخت برند شما مورد توجه قرار می‌گیرد.
                  <Link to="/media-list">
                    <ButtonMui text="لیست رسانه ها" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-campaign">
        <div className="service campaign">
          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/pages/our_services_page/business_coaching.webp"
                alt="عکس در مورد کمپین نویسی"
                className="service__image"
              />
            </div>

            <div className="service__icon-container">
              <img
                src="/icons/our_services/campaign_icon.svg"
                alt="آیکون کمپین نویسی"
              />
            </div>
          </div>
          <div className="service__body-content">
            <div className="campaign__headings">
              <p className="english-title">Campaing Writing</p>
              <h2 className="section-title">کمپین نویسی</h2>
            </div>
            <p className="description">
              در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
              برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده از دانش و
              تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا هویت بصری متمایز
              و جذابی برای برند خود ایجاد کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section section-digital-marketing">
        <div className="service digital-marketing">
          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/pages/our_services_page/digital_marketing_img.webp"
                alt="عکس در مورد کمپین نویسی"
                className="service__image"
              />
            </div>

            <div className="service__icon-container">
              <img
                src="/icons/our_services/digital_marketing_icon.svg"
                alt="آیکون دیجیتال مارکتینگ"
              />
            </div>
          </div>
          <div className="service__body-content">
            <div className="campaign__headings">
              <p className="english-title">Digital Marketing</p>
              <h2 className="section-title">دیجیتال مارکتینگ</h2>
            </div>
            <p className="description">
              در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
              برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده از دانش و
              تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا هویت بصری متمایز
              و جذابی برای برند خود ایجاد کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section section-business-coaching">
        <div className="service business-coaching">
          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/pages/our_services_page/business_coaching.webp"
                alt="عکس در مورد کمپین نویسی"
                className="service__image"
              />
            </div>
          </div>
          <div className="service__body-content">
            <div className="campaign__headings">
              <p className="english-title">Business Coaching</p>
              <h2 className="section-title">کوچینگ کسب و کار</h2>
            </div>
            <p className="description">
              در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
              برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده از دانش و
              تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا هویت بصری متمایز
              و جذابی برای برند خود ایجاد کنید.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
