const features = [
  {
    id: 1,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        />
      </svg>
    ),
    title: 'Emergency Help',
    description:
      'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 14l-7 7m0 0l-7-7m7 7V3'
        />
      </svg>
    ),
    title: 'Enriched Pharmacy',
    description:
      'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    title: 'Medical Treatment',
    description:
      'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
  },
];

const Features = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            We Are Always Ready to Help You & Your Family
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

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center'
            >
              <div className='flex justify-center mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
