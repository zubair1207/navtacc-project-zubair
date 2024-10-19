import React from 'react'
import ProductList from '../../components/ProductList'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div className="container mx-auto bg-gray-200">
    <h2 className="text-3xl font-bold text-center mb-1 py-16">My Products</h2>
      <div className='flex justify-center align-middle'>
        <Link to={"/addProduct"} className='inline-block mx-auto mt-1 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'>
          Add Product
        </Link>
      </div>

      <ProductList />
    </div>
      
    </>
  )
}

export default Dashboard