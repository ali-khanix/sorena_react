import "./item.css";
import { Link } from "react-router-dom";

function Item({ image, location, line, dimension, status, navigateTo }) {
  return (
    <Link to={navigateTo} className="item__link">
      <div className="item">
        <div className="item__details-content">
          <h2 className="item__location">{location}</h2>
          <div className="status-container">
            <h3 className="item__line">{line}</h3>
            <div className="item__dimension-container">
              <span className="item__dimension">{dimension}</span>
            </div>
            <div className="item__label-cotainer">
              <span className="item__status">{status}</span>
            </div>
          </div>
        </div>

        <div className="item__image-content">
          <img src={image} alt="عکس" className="image" />
        </div>
      </div>
    </Link>
  );
}

export default Item;
