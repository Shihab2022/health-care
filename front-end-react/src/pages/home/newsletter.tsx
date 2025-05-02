import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [placeholder, setPlaceholder] = useState('Your email address');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted email:', email);
    // You would typically send this to your backend
    setEmail('');
  };

  return (
    <section className='newsletter py-16 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Newsletter Text */}
          <div className='md:w-1/2'>
            <div className='subscribe-text'>
              <h6 className='text-lg font-semibold text-gray-800 mb-2'>
                Sign up for newsletter
              </h6>
              <p className='text-gray-600'>
                Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                <br className='hidden md:block' /> homero alterum.
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className='md:w-1/2 w-full'>
            <div className='subscribe-form'>
              <form
                onSubmit={handleSubmit}
                className='newsletter-inner flex flex-col sm:flex-row gap-2'
              >
                <input
                  name='EMAIL'
                  placeholder={placeholder}
                  className='common-input flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                  onFocus={() => setPlaceholder('')}
                  onBlur={() => setPlaceholder('Your email address')}
                  required
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type='submit'
                  className='btn bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
