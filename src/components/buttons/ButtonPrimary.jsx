import './ButtonPrimary.css';

function ButtonPrimary({ text, icon, alt }) {
  return (
    <a href="tel:+989126463968" className="btn-container">
      <div className="btn__content">
        <span>{text}</span>
        <img src={icon} alt={alt} className="btn-icon" />
      </div>
    </a>
  );
}

export default ButtonPrimary;
