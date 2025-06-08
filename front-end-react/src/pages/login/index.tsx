import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { loginUserApi } from "../../services/auth";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../store/user";
type LoginFormData = {
  email: string;
  password: string;
};
const LoginPage = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
    const onSubmit =async (data: LoginFormData) => {
    console.log(data);
    try {
        const res=await  loginUserApi(data)
        if(res?.data?.success){
                    dispatch({ type: SET_TOKEN, token: res?.data?.data?.accessToken });

        }
        console.log({res})
    } catch (error) {
        console.log(error)
    }
    // Handle login logic here
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
                            Login
                        </label>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      {/* Email Field */}
      <div>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="Email"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="mt-7">
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Password must be at least 8 characters',
            },
          })}
          placeholder="Password"
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Forget Password Link */}
      <div className="mt-7 flex">
        <div className="w-full text-right">
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="#"
          >
            Forgot password?
          </a>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-7">
        <button
          type="submit"
          className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Login
        </button>
      </div>

      {/* Social Login Divider */}
      <div className="flex mt-7 items-center text-center">
        <hr className="border-gray-300 border-1 w-full rounded-md" />
        <label className="block font-medium text-sm text-gray-600 w-full">
          Login with
        </label>
        <hr className="border-gray-300 border-1 w-full rounded-md" />
      </div>

      {/* Social Buttons */}
      <div className="flex mt-7 justify-center w-full">
        <button
          type="button"
          className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Facebook
        </button>
        <button
          type="button"
          className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Google
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
                                    <label className="mr-2" >Not registered yet?</label>
                                    <a onClick={()=>navigate("/register")} href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                       Create an Account
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

export default LoginPage;