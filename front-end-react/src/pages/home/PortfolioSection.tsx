import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const portfolioItems = [
  { id: 1, image: '/src/img/pf1.jpg', alt: 'Hospital cleanliness example 1' },
  { id: 2, image: '/src/img/pf2.jpg', alt: 'Hospital cleanliness example 2' },
  { id: 3, image: '/src/img/pf3.jpg', alt: 'Hospital cleanliness example 3' },
  { id: 4, image: '/src/img/pf4.jpg', alt: 'Hospital cleanliness example 4' },
  { id: 5, image: '/src/img/pf1.jpg', alt: 'Hospital cleanliness example 5' },
  { id: 6, image: '/src/img/pf2.jpg', alt: 'Hospital cleanliness example 6' },
  { id: 7, image: '/src/img/pf3.jpg', alt: 'Hospital cleanliness example 7' },
  { id: 8, image: '/src/img/pf4.jpg', alt: 'Hospital cleanliness example 8' },
];

const PortfolioSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            We Maintain Cleanliness Rules Inside Our Hospital
          </h2>
          <div className='flex justify-center mb-4'>
            <img
              src='/img/section-img.png'
              alt='Section divider'
              className='h-2'
            />
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts
          </p>
        </div>
      </div>

      {/* Portfolio Carousel */}
      <div className='container-fluid px-0'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='portfolio-slider'
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='relative group overflow-hidden rounded-lg shadow-md mx-2'>
                <img
                  src={item.image}
                  alt={item.alt}
                  className='w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href='portfolio-details.html'
                    className='bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition duration-300'
                  >
                    View Details
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
