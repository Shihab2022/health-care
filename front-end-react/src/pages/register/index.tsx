import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { registerUserApi } from "../../services/auth";

type FormData = {
  name: string;
  email: string;
  contact: string;
  address?: string;
  password: string;
  confirmPassword: string;
};
const Register = () => {
        const navigate=useNavigate()
        const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit =async (data: FormData) => {
    console.log(data);


//     { "password": "123456",
//  "patient":{
//      "email": "patient2@gmail.com",
//    "name": "Md. Fahim", 
//    "contactNumber": "01111111111", 
//    "address": "Dhaka, BD"
//     } }
const params={
    password:data?.password,
    patient:{
        email:data?.email,
        name:data?.name,
        contactNumber:data?.contact,
        address: "Dhaka, BD"

    }
}
console.log(JSON.stringify(params))
    try {
        const res=await registerUserApi(params)
        console.log({res})
    } catch (error) {
        console.log({error})
        
    }
    // Submit logic here
  };

    return (
        <>
<div className="font-sans">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Register
                </label>
               
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      {/* Name Field */}
      <div>
        <input 
          {...register("name", { required: "Name is required" })}
          placeholder="Name" 
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div className="mt-7">
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          placeholder="Email"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Contact Number */}
      <div className="mt-7">
        <input
          {...register("contact", {
            required: "Contact number is required",
            minLength: {
              value: 10,
              message: "Contact number must be at least 10 digits"
            }
          })}
          type="tel"
          placeholder="Contact Number"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
      </div>

      {/* Password */}
      <div className="mt-7">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 8 characters"
            }
          })}
          type="password"
          placeholder="Password"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div className="mt-7">
        <input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: value => value === watch('password') || "Passwords don't match"
          })}
          type="password"
          placeholder="Confirm Password"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="mt-7">
        <button 
          type="submit"
          className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Register
        </button>
      </div>

          {/* <div className="flex mt-7 justify-center w-full">
                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Facebook
                        </button>
        
                        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Google
                        </button>
                    </div> */}

                             <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >Already Register</label>
                                    <a onClick={()=>navigate("/login")} href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                      Login
                                    </a>
                                </div>
                            </div>
    </form>
            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default Register;