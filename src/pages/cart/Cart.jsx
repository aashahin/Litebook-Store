import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { Link
 } from "react-router-dom";
export default function Cart() {
  const {cartItems,removeCart,addCart} = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-title">Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.length > 0 ? cartItems.map((item, i) => {
            item.quantity = item.quantity === 0 ? 1: item.quantity
            const {quantity} = item
            return (
              <div key={i} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                />
                <div className="cart-item-info">
                  <p className="cart-item-title">
                    <b>Title:</b> <Link className="cart-product-title" to={`/book/${item.isbn13}`}>{item.title}</Link>
                  </p>
                  <p className="cart-item-price">
                    <b>Price:</b> ${Math.imul(item.price.slice(1), quantity)}
                  </p>
                </div>
                <div className="cart-quantity">
                  <div className="cart-item-quantity">
                    <button onClick={()=> addCart({...item,quantity: quantity +1})}>
                      <i className="las la-plus-circle"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={()=> addCart({...item,quantity: quantity -1})}>
                      <i className="las la-minus-circle"></i>
                    </button>
                    <i onClick={()=> removeCart(item.isbn13)} className="las la-trash-alt"></i>
                  </div>
                </div>
              </div>
            );
          }) : <h1 className="cart-oops">Oops! You Not added products to cart.</h1>}
        </div>
        <div className="cart-summary">
          <p className="cart-summary-title">Order Summary</p>
          <div className="cart-summary-details">
            <p>Discount: <span>$0</span></p>
            <p>Price: <span>${cartItems.reduce((p,c)=>p + c.price.slice(1) * c.quantity,0)}</span></p>
            <p>Total: <span>${cartItems.reduce((p,c)=>p + c.price.slice(1) * c.quantity,0)}</span></p>
          </div>
          <div className="cart-summary-order">
          <button>Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
