import React, { useEffect, useState } from 'react';
import { useProduct } from '../contexts/ProductContext';

function Products() {
  const { products, fetchAllProducts } = useProduct();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // Filter products based on the search term
  const filteredProducts = products.filter(product => 
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change for the search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-2 py-16">Products</h2>

        <div className="flex flex-col items-center">
          <p className='text-2xl font-medium mb-5'>Total Number of products: {filteredProducts.length}</p>
          <input 
            type="search" 
            placeholder="Search for products..." 
            onChange={handleSearchChange} 
            className="border rounded p-4 text-xl w-1/2 md:w-1/3 lg:w-1/4"
          />
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
                filteredProducts.map((product, index) => (
                  <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img 
                        alt="ecommerce" 
                        className="object-cover object-center w-full h-full block" 
                        src={product?.productImage} 
                      />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">Product Name: {product?.productName}</h2>
                      <h2 className="mt-1">Description: {product?.productDescription}</h2>
                      <p className="mt-1">Price: Rs. {product?.productPrice}/-</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Products;
