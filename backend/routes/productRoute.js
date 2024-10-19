const router = require("express").Router()
const {
    getAllProducts,
    getUserProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController")
const authMiddleware = require("../middlewares/authMiddleware")

router.route("/")
    .get(getAllProducts)
    .post(authMiddleware, createProduct)

router.get("/userProducts", authMiddleware, getUserProduct)

router.route("/:id")
    .put(authMiddleware, updateProduct)
    .delete(authMiddleware, deleteProduct)

module.exports = router