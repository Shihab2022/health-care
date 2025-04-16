import Header from '../../ui-component/header';
import CallToAction from './CallToAction';
import Features from './features';
import FunFacts from './funFacts';
import PortfolioSection from './PortfolioSection';
import Schedule from './Schedule';
import Slider from './slider';
import WhyChooseUs from './whyChooseUs';

const HomePageOne = () => {
  return (
    <>
      {' '}
      <Header />
      <Slider />
      <Schedule />
      <Features />
      <FunFacts />
      <WhyChooseUs />
      <CallToAction />
      <PortfolioSection />
    </>
  );
};

export default HomePageOne;
