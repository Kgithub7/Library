import Price from "./Price";

function CartItem({ book }) {
  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={book.url} alt="" className="cart__book--img" />
        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <span className="cart__book--price">
            <Price
              originalPrice={book.originalPrice}
              salePrice={book.salePrice}
            />
          </span>
          <button className="cart__book--remove"></button>
        </div>
      </div>
      <div className="cart__quantity">
        <input type="number" min={0} max={99} className="cart__input" />
      </div>
      <div className="cart__total">
        {(book.salePrice || book.originalPrice).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;
