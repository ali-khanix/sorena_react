import './AboutUsStyle.css';

function AboutUs() {
  return (
    <>
      <section className="section-about-us-page">
        <div className="page-temp__hero-content">
          <div className="border-top--corner"></div>
          <div className="border-bottom--corner"></div>
          <span className="english-title">About Us</span>
          <h1 className="heading-primary">درباره ما</h1>
          <p className="description">
            در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
            برای شناخت برند شما مورد توجه قرار می‌گیرد.
          </p>
        </div>
      </section>

      <section className="services-section section-design">
        <div className="service service-design">
          <div className="service__body-content">
            <p className="english-title">We Are Sorena Center</p>
            <h2 className="section-title">ما کانون تبلیغاتی سورنا هستیم</h2>
            <p className="description">
              و از همه مهم تر ما تجسم تخیلات ذهنی را به تصویر می كشیم . سورنا
              مهر البرز یكی از طراحان اصلی کمپین های تبلیغاتی در ایران است كه
              عملكـردش شامل مشـاوره و برنامـه ریزی تبلیـغاتی میباشد. این کانون
              با دارا بودنِ بیش از 5 هزار متر فضای تبلیغاتی که شاملِ عرشه پل و
              بیلبوردهای تبلیغاتی در محور های مواصلاتی کل کشور میباشد، آماده ی
              خدمات رسانی و ارائه کمپین های تبلیغاتی به شما عزیزان میباشد.
            </p>
          </div>

          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/pages/our_services_page/business_coaching.webp"
                alt=""
                className="service__image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section section-design">
        <div className="service service-design">
          <div className="service__body-content">
            <p className="english-title">?Why Choose Us</p>
            <h2 className="section-title">چرا مارا انتخاب کنید؟</h2>
            <p className="description">
              و از همه مهم تر ما تجسم تخیلات ذهنی را به تصویر می كشیم . سورنا
              مهر البرز یكی از طراحان اصلی کمپین های تبلیغاتی در ایران است كه
              عملكـردش شامل مشـاوره و برنامـه ریزی تبلیـغاتی میباشد. این کانون
              با دارا بودنِ بیش از 5 هزار متر فضای تبلیغاتی که شاملِ عرشه پل و
              بیلبوردهای تبلیغاتی در محور های مواصلاتی کل کشور میباشد، آماده ی
              خدمات رسانی و ارائه کمپین های تبلیغاتی به شما عزیزان میباشد.
            </p>
          </div>

          <div className="service__image-content">
            <div className="service__image-container">
              <img
                src="/images/about us/aboutUs2.webp"
                alt=""
                className="service__image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
