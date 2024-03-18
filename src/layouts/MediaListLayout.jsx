import Category from "../pages/media_list/Category";
import categoryObject from "../data/MediaData";
import "./MediaListStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

function MediaList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="category-page-container">
        <div className="section-title">
          <span>Media List</span>
          <h1>لیستِ رسانه های تبلیغاتی</h1>
        </div>
        <nav className="category-nav">
          <div className="nav__buttons">
            <Link>
              <ArrowLeftLineIcon size={30} onClick={() => navigate(-1)} />
            </Link>
          </div>
        </nav>
        <section className="section-category">
          <div className="category-container">
            {categoryObject.map((item, i) => {
              return (
                <Category
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  alt={item.alt}
                  linkTo={item.linkTo}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default MediaList;
