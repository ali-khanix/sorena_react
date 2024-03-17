import "./features.css";

export default function Features() {
  return (
    <>
      <section className="section-features">
        <div className="features">
          <div className="features__headings">
            <p className="english-title">?What do we do</p>
            <h2 className="section-title ">ما برایِ شما چه کار میکنیم؟</h2>
          </div>

          <div className="features__cards">
            <div className="features__card">
              <div className="features__card-icon-content">
                <img
                  src="/icons/Billbaord_Icon.svg"
                  alt="آیکون بیلبورد"
                  className="features__card-icon"
                />

                <span className="features__card-icon-description">
                  تبلیغاتِ محیطی
                </span>
              </div>

              <div className="features__card-data-content">
                <p className="description">
                  کانونِ سورنا با 18 سال سابقه در خصوص تبلیغاتِ محیطی افتخار
                  دارد خدماتِ ویژه ای را در خصوصِ تبلیغاتِ محیطی به مشتریانِ خود
                  ارائه دهد.
                </p>
              </div>
            </div>
            <div className="features__card">
              <div className="features__card-icon-content">
                <img
                  src="/icons/road.svg"
                  alt="آیکون بیلبورد"
                  className="features__card-icon"
                />

                <span className="features__card-icon-description">
                  محورهای مواصلاتی
                </span>
              </div>

              <div className="features__card-data-content">
                <p className="description">
                  کانونِ سورنا افتخار دارد 10 محور اصلی مواصلاتی کشور به صورت
                  مستقیم خدمات ویژه به مشتریان ارائه دهد.
                </p>
              </div>
            </div>
            <div className="features__card">
              <div className="features__card-icon-content">
                <img
                  src="/icons/Campaign_Icon.svg"
                  alt="آیکون بیلبورد"
                  className="features__card-icon"
                />

                <span className="features__card-icon-description">
                  ارائه کمپین هایِ تبلیغاتی
                </span>
              </div>

              <div className="features__card-data-content">
                <p className="description">
                  با توجه به اینکه محورهای مواصلاتی تحتِ اختیارِ این کانون جزو
                  محورهای اصلیِ کل کشور محسوب میشود، بهترین گزینه برای ارائه
                  کمپین های تبلیغاتی به مشتریان میباشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
