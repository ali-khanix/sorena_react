import "./bridgesGhazvinStyle.css";
import bridgesGhazvinData from "./../../../data/bridgesGhazvinData";
import Item from "../../../components/item/Item";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

function BridgesGhazvin() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bridges-ghazvin-container">
        <div className="section-headings">
          <span>Karaj - Ghazvin line : Bridge</span>
          <h1>عرشه پل محور اتوبانِ کرج - قزوین</h1>
        </div>
        <nav className="category-nav">
          <div className="breadcrumb">
            <Link to={"/"}>صفحه اصلی</Link>
            <Link to={"/media-list"}>لیست بیلبوردها</Link>
            <p className="active">محور قزوین</p>
          </div>

          <div className="nav__buttons">
            <Link>
              <ArrowLeftLineIcon size={30} onClick={() => navigate(-1)} />
            </Link>
          </div>
        </nav>
        <div className="list-container">
          {bridgesGhazvinData.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                location={item.location}
                line={item.line}
                image={item.image}
                status={item.status}
                dimension={item.dimensions}
                navigateTo={`/media-list/bridges-ghazvin/${item.id}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BridgesGhazvin;
