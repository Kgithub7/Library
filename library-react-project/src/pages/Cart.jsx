import { Link } from "react-router";
import CartItem from "../components/ui/CartItem";
import EmptyCart from "../assets/empty_cart.svg";

function Cart({ cart, changeQuantity, removeItem }) {
  let price = 0;
  cart.forEach((item) => {
    price += +(item.salePrice || item.originalPrice) * item.quantity;
  });

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <CartItem
                    book={book}
                    changeQuantity={changeQuantity}
                    removeItem={removeItem}
                    key={book.id}
                  />
                ))}
              </div>
            {cart.length===0&&<div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart.</h2>
                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${price.toFixed(2) || 0}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(price * 0.1).toFixed(2) || 0}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${(price * 1.1).toFixed(2) || 0}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() => alert("Enjoy your purchase!")}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
