import { useState } from 'react';

const departments = [
  'Department',
  'Cardiac Clinic',
  'Neurology',
  'Dentistry',
  'Gastroenterology',
];

const doctors = [
  'Doctor',
  'Dr. Akther Hossain',
  'Dr. Dery Alex',
  'Dr. Jovis Karon',
];
const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Department',
    doctor: 'Doctor',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className='appointment py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center text-center mb-12'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
              We Are Always Ready to Help You. Book An Appointment
            </h2>
            <img
              src='/src/img/section-img.png'
              alt='Section divider'
              className='mx-auto mb-4'
            />
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
              aliquet. pretiumts
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <form onSubmit={handleSubmit} className='form'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-group'>
                  <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='phone'
                    type='text'
                    placeholder='Phone'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white'
                    value={formData.department}
                    onChange={(e) =>
                      handleSelectChange('department', e.target.value)
                    }
                  >
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group'>
                  <select
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white'
                    value={formData.doctor}
                    onChange={(e) =>
                      handleSelectChange('doctor', e.target.value)
                    }
                  >
                    {doctors.map((doctor, index) => (
                      <option key={index} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={formData.date}
                    onChange={(e) => handleSelectChange('date', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group md:col-span-2'>
                  <textarea
                    name='message'
                    placeholder='Write Your Message Here.....'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center justify-between mt-8 gap-4'>
                <div className='w-full md:w-auto'>
                  <button
                    type='submit'
                    className='btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 w-full md:w-auto'
                  >
                    Book An Appointment
                  </button>
                </div>
                <div className='text-gray-600 text-sm md:text-base'>
                  <p>( We will be confirm by an Text Message )</p>
                </div>
              </div>
            </form>
          </div>

          <div className='lg:w-1/2 flex items-center'>
            <div className='appointment-image'>
              <img
                src='/src/img/contact-img.png'
                alt='Appointment visual'
                className='w-full h-auto rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
