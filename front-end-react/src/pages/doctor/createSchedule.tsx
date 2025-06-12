/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';

const CreateSchedule = () => {
  // Get current date and time
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const currentTime = now.toTimeString().slice(0, 5); // HH:MM format

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      startDate: currentDate,
      endDate: currentDate,
      startTime: currentTime,
      endTime: '', // Leave empty initially
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Add your form submission logic here
  };

  // Watch values for validation
  const startDate = watch('startDate');
  const endDate = watch('endDate');
  const startTime = watch('startTime');
  const endTime = watch('endTime');

  // Calculate min time based on whether selected date is today
  const getMinTime = (date: string) => {
    if (date === currentDate) {
      return currentTime;
    }
    return '00:00';
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>Schedule Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Start Date */}
        <div>
          <label
            htmlFor='startDate'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Start Date
          </label>
          <input
            type='date'
            id='startDate'
            min={currentDate}
            {...register('startDate', {
              required: 'Start date is required',
              validate: (value) =>
                value >= currentDate || 'Cannot select past dates',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.startDate && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* End Date */}
        <div>
          <label
            htmlFor='endDate'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            End Date
          </label>
          <input
            type='date'
            id='endDate'
            min={startDate || currentDate}
            {...register('endDate', {
              required: 'End date is required',
              validate: (value) =>
                value >= startDate || 'End date cannot be before start date',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.endDate && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.endDate.message}
            </p>
          )}
        </div>

        {/* Start Time */}
        <div>
          <label
            htmlFor='startTime'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Start Time
          </label>
          <input
            type='time'
            id='startTime'
            min={startDate === currentDate ? currentTime : undefined}
            {...register('startTime', {
              required: 'Start time is required',
              validate: {
                notPast: (value) => {
                  if (startDate === currentDate) {
                    return value >= currentTime || 'Cannot select past times';
                  }
                  return true;
                },
              },
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.startTime && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.startTime.message}
            </p>
          )}
        </div>

        {/* End Time */}
        <div>
          <label
            htmlFor='endTime'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            End Time
          </label>
          <input
            type='time'
            id='endTime'
            min={
              endDate === startDate
                ? startDate === currentDate
                  ? startTime >= currentTime
                    ? startTime
                    : currentTime
                  : startTime
                : undefined
            }
            {...register('endTime', {
              required: 'End time is required',
              validate: {
                afterStart: (value) => {
                  if (endDate === startDate) {
                    return (
                      value > startTime || 'End time must be after start time'
                    );
                  }
                  return true;
                },
                notPast: (value) => {
                  if (endDate === currentDate) {
                    return value >= currentTime || 'Cannot select past times';
                  }
                  return true;
                },
              },
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.endTime && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.endTime.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSchedule;
