import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import "./billboardsGhomDetailPageStyle.css";
import bridgesGhazvinData from "./../../../data/BillboardsGhomData";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";

export default function BillboardsGhomDetailPage() {
  const navigate = useNavigate();
  const { billboardsGhomId } = useParams();

  const singleGhazvinMedia = bridgesGhazvinData.find(
    (media) => media.id === parseInt(billboardsGhomId)
  );

  const { image, location, line, dimensions, status, mapLink } =
    singleGhazvinMedia;

  return (
    <>
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
                <span className="media__details-reserved">{status}</span>
              </h3>
              <hr />

              <ButtonPrimary />
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
