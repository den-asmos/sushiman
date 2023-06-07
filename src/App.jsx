import {
  Header,
  Hero,
  AboutUs,
  Popular,
  Trending,
  CTA,
  Footer,
} from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({ duration: 1000, offset: 100 });

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Popular />
      <Trending />
      <CTA />
      <Footer />
    </>
  );
};
