const Loader = () => {
  return (
    <>
      {' '}
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900'>
        <div className='relative w-20 h-20'>
          {/* Outer loader circle */}
          <div className='absolute border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full w-full h-full animate-spin'></div>

          {/* Inner loader circle */}
          <div className='absolute border-4 border-transparent border-t-blue-700 border-r-blue-700 rounded-full w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin animation-delay-200'></div>

          {/* SVG indicator */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <svg width='16px' height='12px' className='text-blue-600'>
              <polyline
                id='back'
                points='1 6 4 6 6 11 10 1 12 6 15 6'
                className='stroke-current opacity-30'
                strokeWidth='2'
                fill='none'
              ></polyline>
              <polyline
                id='front'
                points='1 6 4 6 6 11 10 1 12 6 15 6'
                className='stroke-current'
                strokeWidth='2'
                fill='none'
                strokeDasharray='16'
                strokeDashoffset='16'
              >
                <animate
                  attributeName='stroke-dashoffset'
                  values='16; 0'
                  dur='1.5s'
                  repeatCount='indefinite'
                />
              </polyline>
            </svg>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default Loader;
