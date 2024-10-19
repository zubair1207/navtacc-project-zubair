import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Feedback from "./pages/Feedback"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Profile from "./pages/user/Profile"
import Dashboard from "./pages/user/Dashboard"
import GuestRoute from "./routes/GuestRoute"
import UserRoute from "./routes/UserRoute"
import AddProduct from "./pages/user/AddProduct"
import Products from "./pages/Products"
import EditProduct from "./pages/user/EditProduct"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/products" element={<Products />} />

            <Route element={<GuestRoute />}>          
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            
            <Route element={<UserRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/editProduct/:id" element={<EditProduct />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
