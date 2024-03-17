import "./bridgesGhazvinStyle.css";
import bridgesGhazvinData from "./../../../data/bridgesGhazvinData";
import Item from "../../../components/item/Item";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

function BridgesGhazvin() {
  const navgiate = useNavigate();

  return (
    <>
      <h1>عرشه پل محور اتوبانِ کرج - قزوین</h1>
      <div className="nav-btn-container">
        <Link>
          <ArrowLeftLineIcon
            className="nav-btn-icon"
            cursor="pointer"
            onClick={() => navgiate(-1)}
          />
        </Link>
      </div>
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
    </>
  );
}

export default BridgesGhazvin;
