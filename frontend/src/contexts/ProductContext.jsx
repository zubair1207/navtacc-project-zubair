import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const { user } = useAuth();
  const { token } = user;
  const [isLoading, setIsLoading] = useState(false);
  const PRODUCT_API_URL = "http://localhost:3000/api/products";

  const [products, setProducts] = useState([]);

  // fetch all products
  const fetchAllProducts = async () => {
    const response = await axios.get(`${PRODUCT_API_URL}`);
    setProducts(response.data);
  };

  // add product
  const addNewProduct = (newProduct) => {
    axios
      .post(`${PRODUCT_API_URL}`, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts([...products, response.data]);
      });
  };

  // fetch user products
  const fetchUserProducts = async () => {
    const response = await axios.get(`${PRODUCT_API_URL}/userProducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProducts(response.data);
  };

  // edit user products
  const updateProduct = async (id, editProduct) => {
    const response = await axios.put(`${PRODUCT_API_URL}/${id}`, editProduct, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  };

  // delete product
  const deleteProduct = async (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this product"
    );
    if (confirm) {
      const response = await axios.delete(`${PRODUCT_API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      alert("product has been deleted");
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        setIsLoading,
        setProducts,
        fetchAllProducts,
        addNewProduct,
        fetchUserProducts,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
