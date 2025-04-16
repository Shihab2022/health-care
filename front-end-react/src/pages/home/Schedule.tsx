const scheduleItems = [
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
          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        />
      </svg>
    ),
    subtitle: 'Lorem Amet',
    title: 'Emergency Cases',
    description:
      'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
    linkText: 'LEARN MORE',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
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
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
        />
      </svg>
    ),
    subtitle: 'Fusce Porttitor',
    title: 'Doctors Timetable',
    description:
      'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
    linkText: 'LEARN MORE',
    bgColor: 'bg-blue-700',
    textColor: 'text-white',
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
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    subtitle: 'Donec luctus',
    title: 'Opening Hours',
    description: null,
    hours: [
      { day: 'Monday - Friday', time: '8.00-20.00' },
      { day: 'Saturday', time: '9.00-18.30' },
      { day: 'Monday - Thursday', time: '9.00-15.00' },
    ],
    linkText: 'LEARN MORE',
    bgColor: 'bg-blue-800',
    textColor: 'text-white',
  },
];
const Schedule = () => {
  return (
    <>
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {scheduleItems.map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} ${item.textColor} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}
              >
                <div className='p-8'>
                  <div className='flex items-start'>
                    <div className='mr-6'>{item.icon}</div>
                    <div>
                      <span className='block text-sm font-medium opacity-80 mb-1'>
                        {item.subtitle}
                      </span>
                      <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                      {item.description && (
                        <p className='mb-4 opacity-90'>{item.description}</p>
                      )}
                      {item.hours && (
                        <ul className='mb-4 space-y-2'>
                          {item.hours.map((hour, index) => (
                            <li key={index} className='flex justify-between'>
                              <span>{hour.day}</span>
                              <span>{hour.time}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <a
                        href='#'
                        className='inline-flex items-center font-medium opacity-90 hover:opacity-100 transition-opacity'
                      >
                        {item.linkText}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 ml-2'
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
