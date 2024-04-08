import './CallUsStyle.css';
import './LocationCard';
import LocationCard from './LocationCard';

function CallUs() {
  return (
    <>
      <section className="section-call-us">
        <div className="page-temp__hero-content">
          <div className="border-top--corner"></div>
          <div className="border-bottom--corner"></div>
          <span className="english-title">Contact Us</span>
          <h1 className="heading-primary">تماس با ما</h1>
          <p className="description">
            در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی
            برای شناخت برند شما مورد توجه قرار می‌گیرد.
          </p>
        </div>
      </section>

      <section className="section-contact">
        <div
          style={{
            marginTop: '4rem',
          }}
          className="contact-cards"
        >
          <LocationCard
            title={'دفتر کرج'}
            address={'کرج، آزادگان، برج یادمان، بوک آ، طبقه 7، واحد آ 1'}
            openingHoures={'9 الی 17'}
            officeNumber={'34205140-41 - 026'}
            mobile={'6463968 - 0912'}
            location={
              <iframe
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '1rem',
                }}
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d202.17192857678864!2d50.99734201335322!3d35.83058800421105!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ5JzUwLjIiTiA1MMKwNTknNTAuOCJF!5e0!3m2!1sfa!2s!4v1712491010603!5m2!1sfa!2s"
              ></iframe>
            }
          />
          <LocationCard
            title={'دفتر قزوین'}
            address={'قزوین ، میدان جانبازان ، ساختمان صتسا ، طبقه 4 ، واحد 8'}
            openingHoures={'9 الی 17'}
            officeNumber={'3365 5983-85 - 028'}
            mobile={'6463968 - 0912'}
            location={
              <iframe
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '1rem',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607.6004527916934!2d50.02599323440939!3d36.307434612482304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8b55572883f0af%3A0x4d01082209511635!2sJanbazan%2C%20Qazvin%2C%20Qazvin%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1712496206147!5m2!1sen!2s"
              ></iframe>
            }
          />
        </div>
      </section>
    </>
  );
}

export default CallUs;
