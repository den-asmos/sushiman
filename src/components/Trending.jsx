import './Trending.css';
import {
  check,
  sushi5,
  sushi4,
  arrowVertical,
  arrowHorizontal,
} from '../assets';
import { trendingSushis, trendingDrinks } from '../utils/constants';

export const Trending = () => {
  return (
    <section className="trending" id="food">
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="sushi__subtitle">What’s Trending / トレンド</p>
          <h3 className="sushi__title">Japanese Sushi</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Sushi here
          </p>

          <ul className="trending__list flex-between">
            {trendingSushis.map((sushi) => (
              <li key={sushi}>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>{sushi}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="trending__image flex-center">
          <img src={sushi5} alt="sushi" data-aos="fade-left" />

          <div className="trending__arrow trending__arrow-left">
            <img src={arrowVertical} alt="arrow vertical" />
          </div>

          <div className="trending__arrow trending__arrow-bottom">
            <img src={arrowHorizontal} alt="arrow horizontal" />
          </div>
        </div>
      </section>

      <div className="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className="trending-drinks">
        <div className="trending__image flex-center">
          <img src={sushi4} alt="sushi" data-aos="fade-right" />

          <div className="trending__arrow trending__arrow-top">
            <img src={arrowHorizontal} alt="arrow horizontal" />
          </div>

          <div className="trending__arrow trending__arrow-right">
            <img src={arrowVertical} alt="arrow vertical" />
          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          <p className="sushi__subtitle">What’s Trending / トレンド</p>
          <h3 className="sushi__title">Japanese Drinks</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Japanese drinks here
          </p>

          <ul className="trending__list flex-between">
            {trendingDrinks.map((drink) => (
              <li key={drink}>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>{drink}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};
