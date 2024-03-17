import "./bridgesJajrudStyle.css";
import Item from "../../../components/item/Item";
import bridgesJajrud from "../../../data/BridgesJajrudData";

function BridgesJajrud() {
  return (
    <>
      <h1 className="jajrud-heading">عرشه پل محور جاجرود</h1>

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
            />
          );
        })}
      </div>
    </>
  );
}

export default BridgesJajrud;
