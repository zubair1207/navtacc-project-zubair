import React, { useEffect } from 'react'
import { useProduct } from '../contexts/ProductContext'
import { MdModeEdit as Edit } from "react-icons/md";
import { MdDelete as Delete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function ProductList() {
  const { products, isLoading, setIsLoading, fetchUserProducts, deleteProduct } = useProduct()
  const navigate = useNavigate()

  useEffect( () =>{
    setIsLoading(true)
    fetchUserProducts()
    setIsLoading(false)
  },[])

  return (
    <>
      {
        isLoading ? <h1>Loading....</h1>: (
          <>
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-16 mx-auto">
                  <p className='text-xl text-gray-900 font-medium px-5 mb-5'>Number of products: {products.length}</p>
                    <div className="flex flex-wrap -m-4">
                      {
                        products.map( (product, index) => (
                          <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                              <img 
                                alt="ecommerce" 
                                className="object-cover object-center w-full h-full block" 
                                src={product?.productImage} />
                            </a>
                            <div className="mt-4">
                              <h2 className="text-gray-900 title-font text-lg font-medium">Product Name: {product?.productName}</h2>
                              <h2 className="mt-1">Description: {product?.productDescription}</h2>
                              <p className="mt-1">Price: Rs. {product?.productPrice}/-</p>
                              <div className='flex justify-end'>
                                <Link to={`/editProduct/${product._id}`} state={product}>
                                  <Edit
                                    size={25} 
                                    className='text-blue-500' 
                                  />                                
                                </Link>

                                <Delete
                                  onClick={() => deleteProduct(product._id)}
                                  size={25} 
                                  className='text-red-500' 
                                />
                              </div>

                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </section>
          </>
        )
      }


    </>
  )
}

export default ProductList