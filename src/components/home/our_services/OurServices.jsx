import OurServicesCard from './OurServicesCard';
import './OurServicesStyle.css';

export default function OurServices() {
  return (
    <>
      <section className="section-our-services">
        <div className="our-services">
          <div className="our-services__headings">
            <span className="english-title">Our Services</span>
            <h2 className="section-title">خدمات ما</h2>
          </div>

          <div className="our-services__data">
            <div className="our-services__cards">
              <OurServicesCard
                englishTitle="Campaign Writing"
                icon="/icons/our_services/campaign_icon.svg"
                iconAlt="آیکون کمپین نویسی"
                title="کمپین نویسی"
              />
              <OurServicesCard
                englishTitle="Environmental Advertising"
                icon="/icons/our_services/billboard_icon.svg"
                iconAlt="آیکون بیلبورد"
                title="تبلیغات محیطی"
              />

              <OurServicesCard
                englishTitle="Business Coaching"
                icon="/icons/our_services/business_coaching_icon.svg"
                iconAlt="آیکون کوچینگ کسب و کار"
                title="کوچینگ کسب و کار"
              />

              <OurServicesCard
                englishTitle="Brand Identity Design"
                icon="/icons/our_services/fountain_pen.svg"
                iconAlt="آیکون طراحی"
                title="طراحی و هویت برند"
              />
              <OurServicesCard
                englishTitle="Digital Marketing"
                icon="/icons/our_services/digital_marketing_icon.svg"
                iconAlt="آیکون دیجیتال مارکتینگ"
                title="دیجیتال مارکتینگ"
              />
              <OurServicesCard
                englishTitle="Photography & Filming"
                icon="/icons/our_services/photography_icon.svg"
                iconAlt="آیکون عکاسی"
                title="عکاسی و فیلمبرداری"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
