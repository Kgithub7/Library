import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";
import { useState } from "react";

function BoookInfo({ books, cart, addToCart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function bookInCart() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, fugit quasi culpa quo voluptatem voluptatum
                    consequuntur enim aspernatur fugiat ducimus suscipit nulla
                    aliquid magnam distinctio eaque nam autem eos! Facilis.
                  </p>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, fugit quasi culpa quo voluptatem voluptatum
                    consequuntur enim aspernatur fugiat ducimus suscipit nulla
                    aliquid magnam distinctio eaque nam autem eos! Facilis.
                  </p>
                </div>
                {bookInCart() ? (
                  <Link to="/cart" className="btn">
                    Checkout
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="books__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .map((book) => <Book book={book} key={book.id} />)
                .slice(0, 4)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BoookInfo;
