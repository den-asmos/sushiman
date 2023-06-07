import './Popular.css';
import { sushi9, sushi8, sushi7, sushi6, arrowRight } from '../assets';
import { Article } from './Article';
import { cards } from '../utils/constants';

export const Popular = () => {
  return (
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up">
        Popular Food / 人気
      </h2>

      <div
        className="popular-foods__filters sushi__hide-scrollbar"
        data-aos="fade-up"
      >
        <button className="popular-foods__filter-btn active">All</button>
        <button className="popular-foods__filter-btn">
          <img src={sushi9} alt="sushi" />
          Sushi
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi8} alt="sushi" />
          Ramen
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi7} alt="sushi" />
          Udon
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi6} alt="sushi" />
          Danggo
        </button>
        <button className="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        {cards.map((card) => (
          <Article
            key={card.title}
            src={card.imgSrc}
            title={card.title}
            rating={card.rating}
            price={card.price}
            active={card?.active}
          />
        ))}
      </div>

      <button className="popular-foods__button">
        Explore Food
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </section>
  );
};
