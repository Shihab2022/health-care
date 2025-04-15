import Header from '../../ui-component/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles

const slides = [
  {
    id: 1,
    image: '/src/img/slider2.jpg',
    title:
      'We Provide <span>Medical</span> Services That You Can <span>Trust!</span>',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btn1: 'Get Appointment',
    btn2: 'Learn More',
  },
  {
    id: 2,
    image: '/src/img/slider.jpg',
    title:
      'We Provide <span>Medical</span> Services That You Can <span>Trust!</span>',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btn1: 'Get Appointment',
    btn2: 'About Us',
  },
  {
    id: 3,
    image: '/src/img/slider3.jpg',
    title:
      'We Provide <span>Medical</span> Services That You Can <span>Trust!</span>',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btn1: 'Get Appointment',
    btn2: 'Contact Now',
  },
];

const HomePageOne = () => {
  return (
    <>
      {' '}
      <Header />
      <section className='relative'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='hero-slider'
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className='single-slider bg-cover bg-center h-screen flex items-center'
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className='absolute inset-0 bg-black bg-opacity-40'></div>
                <div className='container mx-auto px-4 relative z-10'>
                  <div className='max-w-2xl'>
                    <div className='text-white'>
                      <h1
                        className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <p className='text-lg mb-8'>{slide.text}</p>
                      <div className='flex flex-wrap gap-4'>
                        <a
                          href='#'
                          className='btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition duration-300'
                        >
                          {slide.btn1}
                        </a>
                        <a
                          href='#'
                          className='btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition duration-300'
                        >
                          {slide.btn2}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HomePageOne;
