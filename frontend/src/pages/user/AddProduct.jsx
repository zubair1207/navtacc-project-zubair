import axios from 'axios'
import React, { useState } from 'react'
import { useProduct } from '../../contexts/ProductContext'
import { Link, useNavigate } from 'react-router-dom'

function AddProduct() {
  const { addNewProduct } = useProduct()
  const navigate = useNavigate()

  const [newProduct, setNewProduct] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: ""
  })

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await addNewProduct(newProduct)
      alert("newProduct added")
      navigate('/dashboard')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>

      <form onSubmit={handleSubmit} className="text-gray-600 body-font relative">

        <div className="container px-5 py-24 mx-auto">
          <Link
            className='className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"'
            to={"/dashboard"}>
            All products
          </Link>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add New Product</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    placeholder='Enter product Name'
                    value={newProduct.productName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Price</label>
                  <input
                    type="number"
                    name="productPrice"
                    placeholder='Enter product price'
                    value={newProduct.productPrice}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Description</label>
                  <textarea
                    name="productDescription"
                    placeholder='Enter product description'
                    value={newProduct.productDescription}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Image URL</label>
                  <input
                    type="text"
                    name="productImage"
                    placeholder='Copy product image product'
                    value={newProduct.productImage}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              {/* button  */}
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Add Product
                </button>
              </div>

            </div>
          </div>
        </div>
      </form>

    </>
  )
}

export default AddProduct