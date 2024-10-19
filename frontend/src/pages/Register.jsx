import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
import { register } from '../services/authService'
import axios from 'axios'

function Register() {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
    age: "",
    password: ""
  })

  const navigate = useNavigate()
  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value})
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(info);
    axios.post("http://localhost:3000/api/auth/register", info)
    .then( (response) => {
      alert("Successfully registered")
      console.log(response.data);
      navigate('/login')
    })
    .catch( (err) => {
      alert(err.response.data.message)
      console.log(err.response.data);
  })
  }
  return (
    <>
    <section className="text-gray-600 bg-gray-200 body-font relative">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Register</h1>
          
        </div>

        <form onSubmit={handleRegister} className="lg:w-1/4 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            {/* username */}
            <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
                <input value={info.username} onChange={handleInput} type="text" id="username" name="username" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            {/* email */}
            <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input value={info.email} onChange={handleInput} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            {/* contact */}
            <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact</label>
                <input value={info.contact} onChange={handleInput} type="text" id="contact" name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

             {/* address */}
             <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                <input value={info.address} onChange={handleInput} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            {/* age */}
            <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age</label>
                <input value={info.age} onChange={handleInput} type="text" id="age" name="age" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            {/* password */}
            <div className="p-2 w-full mb-2">
              <div className="relative">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                <input value={info.password} onChange={handleInput} type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            <div className="p-2 w-full mt-8 border-t border-b border-gray-200 text-center">
              <Link to="/login" className="text-blue-500">Already have an account</Link>
            </div>

            <div className="p-2 w-full mt-10">
              <button type='submit' className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Register
              </button>
            </div>
          


          </div>
        </form>
      </div>
    </section>
    
    </>
  )
}

export default Register