import "./App.css";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Carts from "./components/cart/Carts";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import PageNotFound from "./components/page-not-found/PageNotFound";
import ProductDetails from "./components/products/ProductDetails";
import Login from "./components/login/Login";
import Protectedlogin from "./components/login/Protectedlogin";
import Products from "./components/products/Products";
import HomeCrousal from "./components/home/HomeCrousal";
function App() {
  return (
    <>
      <Navbar />
      <HomeCrousal></HomeCrousal>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Protectedlogin Component={About} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/products/:slug" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
