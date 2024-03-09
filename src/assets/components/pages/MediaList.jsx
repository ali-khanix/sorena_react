import Category from './Category';
import categoryObject from '../db/MediaData';
import './MediaListStyle.css';
import { Link } from 'react-router-dom';

function MediaList() {
  return (
    <>
      <div className="section-title">
        <span>Media List</span>
        <h1 className="heading-primary">لیستِ رسانه های تبلیغاتی</h1>
      </div>
      <div className="category-container">
        {categoryObject.map((item, i) => {
          return (
            <>
              <Link>
                <Category
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  alt={item.alt}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MediaList;
