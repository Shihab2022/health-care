import Header from '../../ui-component/header';
import Appointment from './Appointment';
import BlogSection from './BlogSection';
import CallToAction from './CallToAction';
import Clients from './ClientSlider';
import Features from './features';
import Footer from './footer';
import FunFacts from './funFacts';
import Newsletter from './newsletter';
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
      <Clients />
      <Appointment />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePageOne;
