import React, { useState } from 'react'
import visible from '../assets/Images/visible.svg'
import invisible from '../assets/Images/invisible.svg'
import Headerc from '../Components/Headerc'
import Footer from '../Components/Footer'
import facebook from '../assets/Images/Facebook.svg'
import google from '../assets/Images/Google.svg'
import X from '../assets/Images/X.svg'

const Login = () => {
  const [field, setField] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value })
  }
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [password, setPassword] = useState('password')
  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility)
    if (passwordVisibility) {
      setPassword('password')
    } else {
      setPassword('text')
    }
  }

  return (
    <div className="flex flex-col justify-between gap-48">
      <Headerc />
      <div className="-mt-[25rem] h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg shadow-blue-200 w-full max-w-md">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            Login To Your Account
          </h2>
          <form method="post" action="submit" className="space-y-6">
            <div className="relative">
              <input
                id="email"
                className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent transition duration-300 placeholder-transparent peer"
                placeholder="Email"
                required=""
                type="email"
                value={field.email}
                onChange={handleChange}
                name="email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm font-medium text-gray-700 transition-all duration-300 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:-translate-y-5"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent transition duration-300 placeholder-transparent peer"
                placeholder="Password"
                required=""
                type={password}
                value={field.password}
                name="password"
                onChange={handleChange}
              />
              <div className="bg-black w-[10%] h-[50%] rounded-full flex justify-center items-center absolute right-0 top-8 transform -translate-y-1/2 cursor-pointer">
                <img
                  src={passwordVisibility ? invisible : visible}
                  className="w-4 h-4"
                  alt="eye"
                  onClick={() => togglePassword()}
                />
              </div>
              <label
                htmlFor="password"
                className="absolute left-4 top-2 text-sm font-medium text-gray-700 transition-all duration-300 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:-translate-y-5"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-300 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?
            <a
              className="text-blue-400 rounded-lg p-2 bg-gray-100 hover:underline"
              href="/login"
              data-discover="true"
            >
              Login here
            </a>
          </p>
          <div className="mt-6 text-sm text-red-500">
            <p>Password must be at least 8 characters long.</p>
          </div>
          <div className="authContainer -mb-5 flex flex-col justify-around items-center p-5 w-full text-white pb-8 max-[449px]:pb-4">
            <span className="text-md text-black">Or</span>
            <div className=" h-full flex justify-around p-5 w-full text-white pb-8 max-[449px]:pb-4 ">
              <div className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center max-[498px]:scale-[.6] bg-black max-lg:w-[2.5rem] max-lg:h-[2.5rem] max-[530px]:w-[2rem] max-[530px]:h-[2rem] max-[500px]:scale-[.8] max-[1040px]:scale-75">
                <div className="relative flex flex-col w-full rounded-full justify-center h-full">
                  <img
                    src={facebook}
                    className="w-[4rem] h-[4rem]"
                    alt="Facebook Icon"
                  />
                  <span className="absolute -left-[15%] top-[100%]">
                    Facebook
                  </span>
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center max-[498px]:scale-[.6] bg-black max-lg:w-[2.5rem] max-lg:h-[2.5rem] max-[530px]:w-[2rem] max-[530px]:h-[2rem] max-[500px]:scale-[.8] max-[1040px]:scale-75">
                <div className="relative flex flex-col w-full rounded-full justify-center h-full">
                  <img src={X} className="w-[4rem] h-[4rem]" alt="X icon" />
                  <span className="absolute left-[38%] top-[100%]">X</span>
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center max-[498px]:scale-[.6] bg-black max-lg:w-[2.5rem] max-lg:h-[2.5rem] max-[530px]:w-[2rem] max-[530px]:h-[2rem] max-[500px]:scale-[.8] max-[1040px]:scale-75">
                <div className="relative flex flex-col w-full rounded-full justify-center h-full">
                  <img
                    src={google}
                    className="w-[4rem] h-[4rem]"
                    alt="Google icon"
                  />
                  <span className="absolute left-[5%] top-[100%]">Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Login
