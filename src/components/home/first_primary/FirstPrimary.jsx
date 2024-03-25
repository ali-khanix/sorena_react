import ButtonPrimary from '../../buttons/ButtonPrimary';
import './FirstPrimaryStyle.css';

export default function FirstPrimary() {
  return (
    <>
      <section className="section-first-cta">
        <div className="first-cta">
          <h2 className="first-cta__heading section-title">
            آماده ای کارت رو بندازی رو سودِ بیشتر؟
          </h2>

          <p className="first-cta__des description">
            ما چــه می كنيم؟این سئوالیسـت كه به دفعات از ما ‌ پرسـیده می شـود ما
            تحقیق می كنیم، ما می نویســـیم، ما ترســیم می كنیم، ما طراحی می
            كنیم، ، ما می ســـازیم، ما برنــــامه ریزی می كنیم، ما صـــحبت می
            كنیم و در نهایت ما در کنارِ شما به اهدافتان نزدیک میشویم.
          </p>

          <ButtonPrimary
            text="همین حالا تماس بگیرید"
            icon="/icons/calling phone icon.svg"
            alt="آیکون تماس با سورنا"
          />
        </div>
      </section>
    </>
  );
}
