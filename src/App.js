import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/checkout-page">
            <CheckoutPage />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
