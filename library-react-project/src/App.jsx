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
    // const duplicateBook = cart.find((item) => item.id === book.id);
    // if (duplicateBook) {
    //   setCart(
    //     cart.map((item) => {
    //       if (item === duplicateBook)
    //         return { ...item, quantity: item.quantity + 1 };
    //       else return item;
    //     })
    //   );
    // } else setCart([...cart, { ...book, quantity: 1 }]);
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BoookInfo books={books} cart={cart} addToCart={addToCart} />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
