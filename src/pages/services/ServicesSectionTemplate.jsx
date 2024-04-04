import './ServicesSectionTemplateStyle.css';

export default function ServicesSectionTemplate() {
  return (
    <>
      <section className="services-section section-design">
        <div className="service service-design">
          <div className="service__body-content">
            <span className="english-title">Brand Identity Design</span>
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
    </>
  );
}
