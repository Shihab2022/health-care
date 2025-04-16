import Header from '../../ui-component/header';
import Features from './features';
import FunFacts from './funFacts';
import Schedule from './Schedule';
import Slider from './slider';

const HomePageOne = () => {
  return (
    <>
      {' '}
      <Header />
      <Slider />
      <Schedule />
      <Features />
      <FunFacts />
    </>
  );
};

export default HomePageOne;
