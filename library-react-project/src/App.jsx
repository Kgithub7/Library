import { BrowserRouter as Router, Routes, Route } from "react-router";
import { books } from "./data.js";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Books from "./pages/Books.jsx";
import BoookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
      <Router>
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BoookInfo books={books} />} />
        </Routes>
      <Footer />
    </div>
      </Router>
  );
}

export default App;
