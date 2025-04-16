const CallToAction = () => {
  return (
    <section
      className="relative py-20 bg-blue-900 bg-opacity-90 bg-[url('/src/img/emergency-bg.jpg')] bg-cover bg-center bg-blend-overlay"
      style={{
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Do you need Emergency Medical Care? Call @{' '}
            <span className='text-blue-300'>1234 56789</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor dictum turpis nec gravida.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a
              href='#'
              className='bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition duration-300'
            >
              Contact Now
            </a>
            <a
              href='#'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center gap-2'
            >
              Learn More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
