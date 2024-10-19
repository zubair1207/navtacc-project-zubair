const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const User = require("../models/useModel");

const getAllProducts = asyncHandler(async (request, response) => {
  const allProducts = await Product.find();

  response.status(200).json(allProducts);
});

const getUserProduct = asyncHandler(async (request, response) => {
  const products = await Product.find({ user: request.user._id });

  if (!products) {
    return response.status(404).json({ message: "invalid user" });
  }

  response.status(200).json(products);
});

const createProduct = asyncHandler(async (request, response) => {
  const { productName, productPrice, productDescription, productImage } =
    request.body;

  if (!productName || !productPrice || !productDescription) {
    return response
      .status(400)
      .json({ message: "Please provide complete product details" });
  }

  const newProduct = await Product.create({
    productName,
    productPrice,
    productDescription,
    productImage,
    user: request.user._id,
  });

  response.status(200).json(newProduct);
});

const updateProduct = asyncHandler(async (request, response) => {
  const productId = request.params.id;

    if (!productId) {
      return response.status(400).json({ message: "Please provide product id" });
    }

  const product = await Product.findById(productId);
    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    const user = await User.findById(request.user._id);

    if (!product.user.equals(user._id)) {
      return response
        .status(401)
        .json({ message: "Unauthorized user cannot update product" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      request.body,
      { new: true }
    );
    response.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (request, response) => {
  const productId = request.params.id;

  if (!productId) {
    return response.status(400).json({ message: "Please provide product id" });
  }

  const product = await Product.findById(productId);

  if (!product) {
    return response.status(404).json({ message: "Product not found" });
  }

  const user = await User.findById(request.user._id);
  if (!product.user.equals(user._id)) {
    return response
      .status(404)
      .json({ message: "Product cannot be deleted by unauthorized user" });
  }

  await Product.findByIdAndDelete(productId);
  response.status(200).json({ message: `Product of id: ${productId} deleted` });
});


module.exports = {
  getAllProducts,
  getUserProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
