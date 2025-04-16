const pricingPlans = [
  {
    id: 1,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
        />
      </svg>
    ),
    title: 'Plastic Surgery',
    price: '$199',
    period: 'Per Visit',
    features: [
      { text: 'Lorem ipsum dolor sit', included: true },
      { text: 'Cubitur sollicitudin fentum', included: true },
      { text: 'Nullam interdum enim', included: false },
      { text: 'Donec ultricies metus', included: false },
      { text: 'Pellentesque eget nibh', included: false },
    ],
    featured: false,
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
        />
      </svg>
    ),
    title: 'Teeth Whitening',
    price: '$299',
    period: 'Per Visit',
    features: [
      { text: 'Lorem ipsum dolor sit', included: true },
      { text: 'Cubitur sollicitudin fentum', included: true },
      { text: 'Nullam interdum enim', included: true },
      { text: 'Donec ultricies metus', included: false },
      { text: 'Pellentesque eget nibh', included: false },
    ],
    featured: true,
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
    ),
    title: 'Heart Surgery',
    price: '$399',
    period: 'Per Visit',
    features: [
      { text: 'Lorem ipsum dolor sit', included: true },
      { text: 'Cubitur sollicitudin fentum', included: true },
      { text: 'Nullam interdum enim', included: true },
      { text: 'Donec ultricies metus', included: true },
      { text: 'Pellentesque eget nibh', included: true },
    ],
    featured: false,
  },
];
const PricingTable = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            We Provide You The Best Treatment In Reasonable Price
          </h2>
          <div className='flex justify-center mb-4'>
            <img
              src='/src/img/section-img.png'
              alt='Section divider'
              className='h-2'
            />
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts
          </p>
        </div>

        {/* Pricing Tables */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${plan.featured ? 'border-2 border-blue-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
            >
              {/* Ribbon for featured plan */}
              {plan.featured && (
                <div className='absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold transform rotate-45 translate-x-8 -translate-y-2'>
                  Popular
                </div>
              )}

              {/* Table Head */}
              <div
                className={`p-8 text-center ${plan.featured ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
              >
                <div className='flex justify-center mb-4'>
                  <div
                    className={`p-4 rounded-full ${plan.featured ? 'bg-white text-blue-500' : 'bg-blue-100 text-blue-500'}`}
                  >
                    {plan.icon}
                  </div>
                </div>
                <h4 className='text-xl font-bold mb-2'>{plan.title}</h4>
                <div className='text-3xl font-bold mb-1'>
                  {plan.price}
                  <span className='text-sm font-normal'>/{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className='bg-white p-6'>
                <ul className='space-y-3'>
                  {plan.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      {feature.included ? (
                        <svg
                          className='h-5 w-5 text-green-500 mr-2 mt-0.5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      ) : (
                        <svg
                          className='h-5 w-5 text-red-500 mr-2 mt-0.5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      )}
                      <span
                        className={
                          feature.included
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className='px-6 pb-6'>
                <a
                  href='#'
                  className={`block w-full text-center py-3 rounded-md font-medium transition-colors duration-300 ${
                    plan.featured
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-blue-100 text-blue-600 border border-gray-300 hover:border-blue-300'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
