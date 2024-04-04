import './OurServicesCardStyle.css';

export default function OurServicesCard({
  icon,
  iconAlt,
  englishTitle,
  title,
}) {
  return (
    <>
      <div className="our-services__card">
        <div className="our-services__card-content">
          <img src={icon} alt={iconAlt} />
          <span>{englishTitle}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}
