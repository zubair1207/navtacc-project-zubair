import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Header() {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()
  const logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    setUser({ username: null, email: null, token: null })
    navigate("/login")
  }

  return (
    <>
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="https://corporate.bestbuy.com/wp-content/uploads/2017/03/best-buy-logo-652x368.jpg" height={90} width={80} alt="logo" />
                    <span className="ml-3 text-gray-300 text-xl"> <span className='text-4xl text-yellow-400'>B</span>EST <span className='text-4xl text-yellow-400'>B</span>UY <span className='text-4xl text-yellow-400'>S</span>TORE</span>
                </div>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Home</NavLink>
                    <NavLink to="/about"  className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>About</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Products</NavLink>
                    <NavLink to="/contact"  className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Contact</NavLink>
                    <NavLink to="/feedback" className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Feedback</NavLink>
                    {
                        user.email && (
                            <>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Profile</NavLink>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? `mr-5 text-white` : `mr-5 hover:text-white`}>Dashboard</NavLink>
                            </>
                        )
                    }               
                </nav>
                
                {
                    !user.email ? (
                        <button
                            onClick={() => navigate("/login")}
                            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        </button>
                    )
                }
                
            </div>
        </header>

    </>
  )
}

export default Header