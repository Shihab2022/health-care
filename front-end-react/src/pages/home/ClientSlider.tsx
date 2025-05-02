import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const clients = [
  { id: 1, img: '/src/img/client1.png' },
  { id: 2, img: '/src/img/client2.png' },
  { id: 3, img: '/src/img/client3.png' },
  { id: 4, img: '/src/img/client4.png' },
  { id: 5, img: '/src/img/client5.png' },
  { id: 6, img: '/src/img/client1.png' },
  { id: 7, img: '/src/img/client2.png' },
  { id: 8, img: '/src/img/client3.png' },
  { id: 9, img: '/src/img/client4.png' },
];
const Clients = () => {
  return (
    <div className='clients bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col'>
          <div className='w-full'>
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={20}
              autoPlay={true}
              interval={3000}
              showThumbs={false}
              className='clients-slider'
            >
              {clients.map((client) => (
                <div key={client.id} className='single-clients px-2'>
                  <img
                    src={client.img}
                    alt='Client logo'
                    className='max-h-16 object-contain mx-auto'
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
