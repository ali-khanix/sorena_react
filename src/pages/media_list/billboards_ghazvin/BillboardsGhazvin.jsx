import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import Item from "../../../components/item/Item";
import billboardsGhazvinData from "./../../../data/BillboardsGhazvinData";
import "./billboardsGhazvin.css";
import { Link, useNavigate } from "react-router-dom";

function BillboardsGhazvin() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="ghazvin-heading">بیلبوردهای محورِ قزوین کرج</h1>

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
        {billboardsGhazvinData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              location={item.location}
              line={item.line}
              image={item.image}
              status={item.status}
              dimension={item.dimensions}
              navigateTo={`/media-list/billboards-ghazvin/${item.id}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default BillboardsGhazvin;
