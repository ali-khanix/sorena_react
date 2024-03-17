import billboardsGhomData from "./../../../data/BillboardsGhomData";
import Item from "../../../components/item/Item";
import "./billboardsGhom.css";

function BillBoardsGhom() {
  return (
    <>
      <h1 className="ghom-heading">بیلبوردهای محور اتوبانِ تهران - قم</h1>
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
