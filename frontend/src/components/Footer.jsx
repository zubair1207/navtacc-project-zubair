import React from 'react'

function Footer() {
  return (
    <>
        <footer className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWfCmua52GlZny9lot_jzWO5724DqPh0vUA&s" height={70} width={70} alt="best buy logo" />

                <span className="ml-3 text-gray-300 text-xl"> <span className='text-3xl text-yellow-300'>B</span>EST <span className='text-3xl text-yellow-300'>B</span>UY <span className='text-3xl text-yellow-300'>S</span>TORE</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">Best Quality Products</p>
              <br />
              <p>Address: Shop # 4, Metro Shopping Mall, Shahra e Faisal, Karachi, Pakistan.</p>
              <p>Contact: 0321-7894563</p>
            </div>
            
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">Men Categories</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Shoes</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Caps</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Trouser shirt</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Belts</a>
                  </li>
                </nav>
              </div>

            </div>

            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">Women Categories</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Shoes</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Bags</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Dress</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Cosmetics</a>
                  </li>
                </nav>
              </div>

            </div>
          </div>

          <div className="bg-gray-400">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-black text-sm text-center sm:text-left">  © 2024 Best Buy Store — Men & Women wear</p>

              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a href='https://www.facebook.com' target='_blank' className="text-gray-900">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href='https://www.twitter.com' target='_blank' className="ml-3 text-gray-900">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href='https://www.instagram.com' target='_blank' className="ml-3 text-gray-900">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
</footer>


    </>
  )
}

export default Footer