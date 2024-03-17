import { Link } from "react-router-dom";
import "./Category.css";

function Category({ title, image, alt, linkTo }) {
  return (
    <>
      <Link to={linkTo}>
        <article className="category">
          <div className="category__image-content">
            <img src={image} alt={alt} className="category__img" />
          </div>
          <div className="category__card-content">
            <h3 className="category-heading">{title}</h3>
          </div>
        </article>
      </Link>
    </>
  );
}

export default Category;
