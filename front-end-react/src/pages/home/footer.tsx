import { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaPinterest,
  FaVimeoV,
  FaCaretRight,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [placeholder, setPlaceholder] = useState('Email Address');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <footer id='footer' className='footer bg-gray-900 text-gray-300'>
      {/* Footer Top */}
      <div className='footer-top py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* About Us */}
            <div className='single-footer'>
              <h2 className='text-xl font-semibold text-white mb-4'>
                About Us
              </h2>
              <p className='mb-6'>
                Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod
                tempor incididunt ut labore dolore magna.
              </p>
              {/* Social */}
              <ul className='social flex space-x-4'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaGooglePlus size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaVimeoV size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaPinterest size={20} />
                  </a>
                </li>
              </ul>
              {/* End Social */}
            </div>

            {/* Quick Links */}
            <div className='single-footer'>
              <h2 className='text-xl font-semibold text-white mb-4'>
                Quick Links
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                <ul className='space-y-2'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Our Cases
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Other Links
                    </a>
                  </li>
                </ul>
                <ul className='space-y-2'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Consuling
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Finance
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center hover:text-white transition'
                    >
                      <FaCaretRight className='mr-2' /> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Open Hours */}
            <div className='single-footer'>
              <h2 className='text-xl font-semibold text-white mb-4'>
                Open Hours
              </h2>
              <p className='mb-6'>
                Lorem ipsum dolor sit ame consectetur adipisicing elit do
                eiusmod tempor incididunt.
              </p>
              <ul className='time-sidual space-y-2'>
                <li className='day flex justify-between'>
                  <span>Monday - Friday</span> <span>8.00-20.00</span>
                </li>
                <li className='day flex justify-between'>
                  <span>Saturday</span> <span>9.00-18.30</span>
                </li>
                <li className='day flex justify-between'>
                  <span>Monday - Thusday</span> <span>9.00-15.00</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className='single-footer'>
              <h2 className='text-xl font-semibold text-white mb-4'>
                Newsletter
              </h2>
              <p className='mb-6'>
                subscribe to our newsletter to get allour news in your inbox..
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              </p>
              <form onSubmit={handleSubmit} className='newsletter-inner flex'>
                <input
                  name='email'
                  placeholder={placeholder}
                  className='common-input flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500'
                  onFocus={() => setPlaceholder('')}
                  onBlur={() => setPlaceholder('Email Address')}
                  required
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type='submit'
                  className='button bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r flex items-center justify-center'
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}

      {/* Copyright */}
      <div className='copyright py-6 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center'>
            <div className='copyright-content text-center'>
              <p>
                © Copyright 2018 | All Rights Reserved by{' '}
                <a
                  href='https://www.wpthemesgrid.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:underline'
                >
                  wpthemesgrid.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Copyright */}
    </footer>
  );
};

export default Footer;
