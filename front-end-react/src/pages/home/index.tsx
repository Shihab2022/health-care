import Header from '../../ui-component/header';
import BlogSection from './BlogSection';
import CallToAction from './CallToAction';
import Features from './features';
import FunFacts from './funFacts';
import PortfolioSection from './PortfolioSection';
import PricingTable from './PricingTable';
import Schedule from './Schedule';
import ServicesSection from './ServicesSection';
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
      <ServicesSection />
      <PricingTable />
      <BlogSection />
    </>
  );
};

export default HomePageOne;
