import { useEffect, useState } from 'react';
import CountUp from 'react-countup'; // For counter animation
const facts = [
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
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
    count: 3468,
    label: 'Hospital Rooms',
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
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    count: 557,
    label: 'Specialist Doctors',
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
          d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    count: 4379,
    label: 'Happy Patients',
  },
  {
    id: 4,
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
    count: 32,
    label: 'Years of Experience',
  },
];

const FunFacts = () => {
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    // Trigger counter animation when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounters(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    const section = document.getElementById('fun-facts');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id='fun-facts' className='py-16 bg-blue-600 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {facts.map((fact) => (
            <div key={fact.id} className='text-center'>
              <div className='flex justify-center mb-4'>
                <div className='p-4 bg-blue-700 rounded-full'>{fact.icon}</div>
              </div>
              <div className='text-4xl font-bold mb-2'>
                {startCounters ? (
                  <CountUp end={fact.count} duration={2.5} separator=',' />
                ) : (
                  <span>0</span>
                )}
                +
              </div>
              <p className='text-lg'>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
