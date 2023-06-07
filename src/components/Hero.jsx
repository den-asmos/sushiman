import { sushi1, playCircle, user } from '../assets';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={sushi1} alt="sushi" data-aos="fade-up" />
        <h2 data-aos="fade-up">
          日 <br />
          本 <br />食
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            any time
          </p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img src={playCircle} alt="play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial" data-aos="fade-up">
          <div className="hero-content__customer flex-center">
            <h4>
              24<span>k+</span>Happy Customers
            </h4>
          </div>

          <div className="hero-content__review">
            <img src={user} alt="user" />
            <p>
              {
                '"This is the best Japanese food delivery service that ever existed"'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
