import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../services/authService'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'


function Login() {
  const [showPassword,setshowPassword]=useState(false)   //--

  const [info, setInfo] = useState({
    username: "",
    password: ""
  })
  const { setUser } = useAuth()

  const navigate = useNavigate()

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login", info)
    .then( (response) => {
      alert(response.data.message)
      console.log(response.data);
      const { username, email } = response.data.loginUser
      const { token } = response.data
      window.localStorage.setItem("username", username)
      window.localStorage.setItem("email", email)
      window.localStorage.setItem("token", token)
      navigate("/")
      setUser({username, email, token})
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
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Login</h1>
          
        </div>
        <form onSubmit={handleLogin} className="lg:w-1/4 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full mb-12">
              <div className="relative">
                <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
                <input value={info.username} onChange={handleInfo} type="text" id="username" name="username" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full mb-12">
              <div className="relative">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>                
                <input value={info.password} onChange={handleInfo} type={showPassword ? "text":"password"} id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <input onClick={()=>setshowPassword(!showPassword)} type="checkbox" name="" id="" />{showPassword ? "Hide" : "Show"}
                
              </div>
            </div>

            <div className="p-2 w-full mt-8 border-t border-b border-gray-200 text-center">
              <Link to="/register" className="text-blue-500">Don't have any account</Link>
            </div>

            <div className="p-2 w-full mt-10">
              <button  className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Login
              </button>
            </div>
          


          </div>
        </form>
      </div>
    </section>

    </>
  )
}

export default Login