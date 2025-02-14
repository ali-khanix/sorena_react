import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';
import './../billboards_ghazvin/billboardsGhazvinDetailPageStyle.css';
import billboardsGhazvinData from '../../../data/BillboardsGhazvinData';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import { Helmet } from 'react-helmet-async';

export default function BillboardsGhazvinDetailPage() {
  const navigate = useNavigate();
  const { billboardsGhazvinId } = useParams();

  const singleGhazvinMedia = billboardsGhazvinData.find(
    (media) => media.id === parseInt(billboardsGhazvinId)
  );

  const {
    image,
    location,
    line,
    dimensions,
    status,
    mapLink,
    metaDescription,
    metaTitle,
  } = singleGhazvinMedia;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://sorenairan.com/media-list/billboards-ghazvin/"
        />
      </Helmet>
      <div className="detail-page">
        <div className="detail-page__nav">
          <nav className="detail-page__breadcrumb">
            <ol className="detail-page__breadcrumb-list">
              <li className="detail-page__breadcrumb-item">
                <Link className="detail-page__breadcrumb-link" to="/">
                  صفحه اصلی
                </Link>
              </li>
              <li className="detail-page__breadcrumb-item">
                <Link className="detail-page__breadcrumb-link" to="/media-list">
                  لیست بیلبوردها
                </Link>
              </li>
              <li className="detail-page__breadcrumb-item">
                <Link
                  className="detail-page__breadcrumb-link"
                  to="/media-list/billboards-ghazvin"
                >
                  رسانه های محورِ قزوین
                </Link>
              </li>
              <li className="detail-page__breadcrumb-item">
                <span className="detail-page__breadcrumb-link ">
                  <span className="active">{location}</span>
                </span>
              </li>
            </ol>
          </nav>

          <div className="detail-page__nav-buttons">
            {/* <Link>
              <ShareLineIcon className="nav-btn-icon" cursor="pointer" />
            </Link> */}
            <Link>
              <ArrowLeftLineIcon
                className="nav-btn-icon"
                cursor="pointer"
                onClick={() => navigate(-1)}
              />
            </Link>
          </div>
        </div>

        <div className="media">
          <div className="media__image-content">
            <img
              width=""
              height=""
              className="media__image"
              src={image}
              alt={` عکس از بیلبوردِ ${location}`}
            />

            <div className="google-map__container desktop">
              <h3>موقعیت مکانی:</h3>
              <iframe className="google-map" src={mapLink}></iframe>
            </div>
          </div>
          <div className="media__detail-content">
            <h1>{location} </h1>
            <div className="media__details">
              <hr />
              <h3>
                <span>محور:</span>
                <span>{line}</span>
              </h3>

              <hr />
              <h3>
                <span>ابعاد:</span>
                <span>{dimensions}</span>
              </h3>
              <hr />
              <h3>
                <span>متراژ:</span>
                <span>تعیین نشده</span>
              </h3>
              <hr />
              <h3>
                <span>وضعیت:</span>
                <span
                  className={`item__status ${
                    status === 'رزرو شده' ? 'reserved' : 'available'
                  }`}
                >
                  {status}
                </span>
              </h3>
              <hr />

              <ButtonPrimary
                text="همین حالا تماس بگیرید"
                icon="/icons/calling phone icon.svg"
              />
            </div>
          </div>
        </div>

        <div className="google-map__container mobile">
          <h3>موقعیت مکانی:</h3>
          <iframe
            className="google-map"
            src={mapLink}
            width="100%"
            height="200px"
          ></iframe>
        </div>
      </div>
    </>
  );
}
