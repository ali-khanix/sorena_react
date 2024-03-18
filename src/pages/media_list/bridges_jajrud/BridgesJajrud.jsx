import "./bridgesJajrudStyle.css";
import Item from "../../../components/item/Item";
import bridgesJajrud from "../../../data/BridgesJajrudData";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

import { Link, useNavigate } from "react-router-dom";

function BridgesJajrud() {
  const navigate = useNavigate();

  return (
    <>
      <div className="jajrud-section-title">
        <span>Jajrud line : Bridge</span>
        <h1>عرشه پل محور جاجرود</h1>
      </div>
      <nav className="category-nav">
        <div className="breadcrumb">
          <Link to={"/"}>صفحه اصلی</Link>
          <Link to={"/media-list"}>لیست بیلبوردها</Link>
          <p className="active">محور جاجرود</p>
        </div>

        <div className="nav__buttons">
          <Link>
            <ArrowLeftLineIcon size={30} onClick={() => navigate(-1)} />
          </Link>
        </div>
      </nav>
      <div className="list-container">
        {bridgesJajrud.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              location={item.location}
              line={item.line}
              image={item.image}
              status={item.status}
              dimension={item.dimensions}
              navigateTo={`/media-list/bridges-jajrud/${item.id}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default BridgesJajrud;
