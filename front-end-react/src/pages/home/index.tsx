import Header from '../../ui-component/header';
import Features from './features';
import FunFacts from './funFacts';
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
    </>
  );
};

export default HomePageOne;
