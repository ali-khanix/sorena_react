import './ButtonPrimary.css';

function ButtonPrimary() {
  return (
    <a href="tel:+989126463968" className="btn-container">
      <div className="btn__content">
        <span>همین حالا تماس بگیرید</span>
        <img
          src="/icons/calling phone icon.svg"
          alt="آیکون تلفن"
          className="btn-icon"
        />
      </div>
    </a>
  );
}

export default ButtonPrimary;
