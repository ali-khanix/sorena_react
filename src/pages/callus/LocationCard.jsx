import './LocationCardStyle.css';
import MapPin from '@mui/icons-material/FmdGoodOutlined';
import ClockOutlined from '@mui/icons-material/AccessTimeOutlined';
import PhoneOutline from '@mui/icons-material/PhoneEnabledOutlined';
import ButtonPrimary from './../../components/buttons/ButtonPrimary';

export default function LocationCard({
  title,
  address,
  openingHoures,
  officeNumber,
  mobile,
  location,
}) {
  return (
    <>
      <div className="location-card">
        <div className="location-card__data-content">
          <h2 className="section-title">{title}</h2>

          <div className="address-data">
            <div className="address-data__icon">
              <MapPin
                sx={{
                  color: 'var(--color-button)',
                }}
              />
            </div>

            <p className="address-data__content">{address}</p>
          </div>
          <div className="address-data">
            <div className="address-data__icon">
              <ClockOutlined
                sx={{
                  color: 'var(--color-button)',
                }}
              />
            </div>

            <p className="address-data__content">{openingHoures}</p>
          </div>
          <div className="address-data">
            <div className="address-data__icon">
              <PhoneOutline
                sx={{
                  color: 'var(--color-button)',
                }}
              />
            </div>

            <p className="address-data__content">{officeNumber}</p>
          </div>
          <div className="address-data">
            <div className="address-data__icon">
              <PhoneOutline
                sx={{
                  color: 'var(--color-button)',
                }}
              />
            </div>

            <p className="address-data__content">{mobile}</p>
          </div>

          <ButtonPrimary
            icon={'/icons/calling phone icon.svg'}
            text={'حالا تماس بگیرید'}
          />
        </div>

        <div className="location-card__map-link">{location}</div>
      </div>
    </>
  );
}
