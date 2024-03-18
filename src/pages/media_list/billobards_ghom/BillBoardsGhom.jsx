import billboardsGhomData from "./../../../data/BillboardsGhomData";
import Item from "../../../components/item/Item";
import "./billboardsGhom.css";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import { Link, useNavigate } from "react-router-dom";

function BillBoardsGhom() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ghom-section-title">
        <span>Tehran - Ghom line: Billboard</span>
        <h1 className="ghom-heading">بیلبوردهای محور اتوبانِ تهران - قم</h1>
      </div>
      <nav className="category-nav">
        <div className="breadcrumb">
          <Link to={"/"}>صفحه اصلی</Link>
          <Link to={"/media-list"}>لیست بیلبوردها</Link>
          <p className="active">محور قم</p>
        </div>

        <div className="nav__buttons">
          <Link>
            <ArrowLeftLineIcon size={30} onClick={() => navigate(-1)} />
          </Link>
        </div>
      </nav>

      <div className="list-container">
        {billboardsGhomData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              location={item.location}
              line={item.line}
              image={item.image}
              status={item.status}
              dimension={item.dimensions}
              navigateTo={`/media-list/billboards-ghom/${item.id}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default BillBoardsGhom;
