import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { books } from "./data.js";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Books from "./pages/Books.jsx";
import BoookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, newQuantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +newQuantity } : item
      )
    );
  }

  function removeItem(book) {
    setCart(cart.filter(item => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter+=item.quantity
    });
    return counter
}


  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BoookInfo books={books} cart={cart} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
