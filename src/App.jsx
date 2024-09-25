import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Categories from './Components/Categories/Categories';
import Product from './Components/Product/Product';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts';
import ShopContextProvider from './Context/ShopContext';
function App() {
  
  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" component={Categories} />
          <Route path="/products/:category" component={Product} />
          <Route path="/category/:category" element={<CategoryProducts/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;