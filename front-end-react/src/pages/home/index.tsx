import Header from '../../ui-component/header';
import Features from './features';
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
    </>
  );
};

export default HomePageOne;
