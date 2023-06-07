import { star } from '../assets';
import PropTypes from 'prop-types';

export const Article = ({ src, title, rating, price, active }) => {
  return (
    <article className={`popular-foods__card ${active ? 'active-card' : ''}`}>
      <img className="popular-foods__card-image" src={src} alt="sushi" />
      <h4 className="popular-foods__card-title">{title}</h4>

      <div className="popular-foods__card-details flex-between">
        <div className="popular-foods__card-rating">
          <img src={star} alt="star" />
          <p>{rating}</p>
        </div>

        <p className="popular-foods__card-price">{price}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  active: PropTypes.bool,
};
