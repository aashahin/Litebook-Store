import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/product/ProductPage";
import Cart from "./pages/cart/Cart";
import { Login } from "./pages/Auth/Login";
import { UpScroll } from "./components/scroll/UpScroll";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:isbn13" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <UpScroll/>
      <Footer />
    </div>
  );
}

export default App;
