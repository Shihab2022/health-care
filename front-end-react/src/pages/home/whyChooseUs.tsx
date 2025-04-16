const WhyChooseUs = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            We Offer Different Services To Improve Your Health
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

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Content */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Who We Are
              </h3>
              <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pharetra antege vel est lobortis, a commodo magna
                rhoncus. In quis nisi non emet quam pharetra commodo.
              </p>
              <p className='text-gray-600 mb-6'>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ul className='space-y-2'>
                  {[
                    'Maecenas vitae luctus nibh',
                    'Duis massa massa',
                    'Aliquam feugiat interdum',
                  ].map((item, index) => (
                    <li key={index} className='flex items-start'>
                      <svg
                        className='h-5 w-5 text-blue-600 mr-2 mt-0.5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className='space-y-2'>
                  {[
                    'Maecenas vitae luctus nibh',
                    'Duis massa massa',
                    'Aliquam feugiat interdum',
                  ].map((item, index) => (
                    <li key={index} className='flex items-start'>
                      <svg
                        className='h-5 w-5 text-blue-600 mr-2 mt-0.5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className='w-full lg:w-1/2'>
            <div className='relative h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center'>
              {/* Video Animation Waves */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative w-32 h-32 rounded-full bg-blue-500 bg-opacity-20'>
                  <div className='absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-20'></div>
                  <div className='absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-20 animation-delay-300'></div>
                  <div className='absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-20 animation-delay-600'></div>
                </div>
              </div>

              {/* Play Button */}
              <a
                href='https://www.youtube.com/watch?v=RFVXy6CRVR4'
                className='relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='h-8 w-8 text-white ml-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
