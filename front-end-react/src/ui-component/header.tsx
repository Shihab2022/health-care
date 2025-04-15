const Header = () => {
  return (
    <>
      <header className='w-full shadow-md'>
        {/* Topbar */}
        <div className='bg-blue-600 text-white py-2'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full md:w-1/2 mb-2 md:mb-0'>
                {/* Contact Links */}
                <ul className='flex flex-wrap gap-4 text-sm'>
                  <li>
                    <a href='#' className='hover:underline'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/2'>
                {/* Top Contact */}
                <ul className='flex flex-wrap gap-4 justify-end text-sm'>
                  <li className='flex items-center gap-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    +880 1234 56789
                  </li>
                  <li className='flex items-center gap-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    <a
                      href='mailto:support@yourmail.com'
                      className='hover:underline'
                    >
                      support@yourmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Inner */}
        <div className='py-4'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              {/* Logo */}
              <div className='w-full md:w-1/4 mb-4 md:mb-0'>
                <a href='/'>
                  <img src='/img/logo.png' alt='Logo' className='h-12' />
                </a>
              </div>

              {/* Main Menu - Desktop */}
              <nav className='hidden md:flex w-full md:w-2/4 justify-center'>
                <ul className='flex space-x-8'>
                  <li className='relative group'>
                    <a
                      href='#'
                      className='flex items-center text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Home
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </a>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10'>
                      <li>
                        <a
                          href='index.html'
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        >
                          Home Page 1
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Services
                    </a>
                  </li>
                  <li className='relative group'>
                    <a
                      href='#'
                      className='flex items-center text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Pages
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </a>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10'>
                      <li>
                        <a
                          href='404.html'
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        >
                          404 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='relative group'>
                    <a
                      href='#'
                      className='flex items-center text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Blogs
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </a>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10'>
                      <li>
                        <a
                          href='blog-single.html'
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        >
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='contact.html'
                      className='text-gray-700 hover:text-blue-600 font-medium'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Appointment Button */}
              <div className='w-full md:w-1/4 flex justify-end'>
                <a
                  href='appointment.html'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300'
                >
                  Book Appointment
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className='md:hidden text-gray-700 focus:outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
