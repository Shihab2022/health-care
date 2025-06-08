/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from 'react-hook-form';
export default function CreateDoctor() {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      password: "",
      admin: {
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        registrationNumber: "",
        experience: 0,
        appointmentFee: 0,
        qualification: "",
        currentWorkingPlace: "",
        designation: "",
        gender: "MALE"
      }
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
   
    reset(); 
  };
  return (
<div className="w-3/4 px-[300px] py-[50px]">
<form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
      <div className="md:flex mb-8">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Personal Info</legend>
          <p className="text-xs font-light text-red-500">This entire section is required.</p>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
            <input
              className={`w-full shadow-inner p-4 border ${errors.admin?.name ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              {...register("admin.name", { required: "Name is required" })}
              placeholder="Enter Doctor Name"
            />
            {errors.admin?.name && (
              <p className="text-red-500 text-xs mt-1">{errors.admin.name.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Address</label>
            <input
              className={`w-full shadow-inner p-4 border ${errors.admin?.address ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              {...register("admin.address", { required: "Address is required" })}
              placeholder="Enter Address"
            />
            {errors.admin?.address && (
              <p className="text-red-500 text-xs mt-1">{errors.admin.address.message}</p>
            )}
          </div>
          
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Experience</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.experience ? 'border-red-500' : 'border-gray-300'}`}
                type="number"
                {...register("admin.experience", { 
                  required: "Experience is required",
                  min: {
                    value: 0,
                    message: "Experience must be positive"
                  },
                  valueAsNumber: true
                })}
                placeholder="Years of Experience"
              />
              {errors.admin?.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.experience.message}</p>
              )}
            </div>
            <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Appointment Fee</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.appointmentFee ? 'border-red-500' : 'border-gray-300'}`}
                type="number"
                {...register("admin.appointmentFee", { 
                  required: "Appointment fee is required",
                  min: {
                    value: 0,
                    message: "Fee must be positive"
                  },
                  valueAsNumber: true
                })}
                placeholder="Appointment Fee"
              />
              {errors.admin?.appointmentFee && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.appointmentFee.message}</p>
              )}
            </div>
          </div>
          
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Qualification</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.qualification ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                {...register("admin.qualification", { required: "Qualification is required" })}
                placeholder="Qualification"
              />
              {errors.admin?.qualification && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.qualification.message}</p>
              )}
            </div>
            <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Registration Number</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.registrationNumber ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                {...register("admin.registrationNumber", { required: "Registration number is required" })}
                placeholder="Registration Number"
              />
              {errors.admin?.registrationNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.registrationNumber.message}</p>
              )}
            </div>
          </div>
          
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Current Working Place</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.currentWorkingPlace ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                {...register("admin.currentWorkingPlace", { required: "Current workplace is required" })}
                placeholder="Current Working Place"
              />
              {errors.admin?.currentWorkingPlace && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.currentWorkingPlace.message}</p>
              )}
            </div>
            <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-xs font-bold">Designation</label>
              <input
                className={`w-full shadow-inner p-4 border ${errors.admin?.designation ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                {...register("admin.designation", { required: "Designation is required" })}
                placeholder="Designation"
              />
              {errors.admin?.designation && (
                <p className="text-red-500 text-xs mt-1">{errors.admin.designation.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:flex mb-8">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Contact</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
            <input
              className={`w-full shadow-inner p-4 border ${errors.admin?.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
              type="tel"
              {...register("admin.contactNumber", { required: "Phone number is required" })}
              placeholder="+880100000000"
            />
            {errors.admin?.contactNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.admin.contactNumber.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Email</label>
            <input
              className={`w-full shadow-inner p-4 border ${errors.admin?.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              {...register("admin.email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="contact@acme.co"
            />
            {errors.admin?.email && (
              <p className="text-red-500 text-xs mt-1">{errors.admin.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Password</label>
            <input
              className={`w-full shadow-inner p-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
        </div>
      </div>
      
      {/* <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Cover Image</legend>
        </div>
        <div className="md:flex-1 px-3 text-center">
          <div className="button bg-yellow-500 hover:bg-yellow-600 text-white mx-auto cursor-pointer relative py-2 px-4 rounded">
            <input
              className="opacity-0 absolute inset-0 w-full h-full"
              type="file"
              accept="image/*"
              {...register("admin.profilePhoto")}
            />
            Add Cover Image
          </div>
        </div>
      </div> */}
      
      <div className="md:flex mb-6 pt-4">
        <div className="md:flex-1 px-3 text-center md:text-right">
          <button
            type="submit"
            className="button bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded"
          >
            Create Doctor Profile
          </button>
        </div>
      </div>
    </form>
 </div>
  )
}
