import React, { useState } from 'react';
import axios from 'axios';


const ProductSearch = () => {
  const [productByName, setproductByName] = useState('');
  const [products, setProducts] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search?name=${productByName}`);
      setProducts(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for products..."
          value={productByName}
          onChange={(e) => setproductByName(e.target.value)}
        />
        <button 
          type="submit"
          className="mx-2 text-white bg-blue-500 border-0 py-1 px-5 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Search
        </button>
      </form>

      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <h3>{product.productName}</h3>
              
            </div>
          ))
        ) : (
          <p>search product...</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
