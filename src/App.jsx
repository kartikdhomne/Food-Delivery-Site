import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/cart" element={<Cart/>}/>
          <Route  path="/orders" element={<PlaceOrder/>}/>
        </Routes>
      
    </div>
  );
};

export default App;
