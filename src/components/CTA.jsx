import './CTA.css';

export const CTA = () => {
  return (
    <section className="subscription flex-center" id="services">
      <h2 data-aos="flip-down">
        Get offers straight <br /> to your inbox
      </h2>
      <p data-aos="fade-up">Sign up for the Sushiman newsletter </p>

      <div className="subscription__form" data-aos="fade-up">
        <input type="text" placeholder="Enter your email address" />
        <button>Get Started</button>
      </div>
    </section>
  );
};
