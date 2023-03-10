import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

export default function HeaderMiddle({nav,setNav}){
  const {cartItems} = useContext(CartContext);

    return(
        <div className="header-middle">
        <Link className="header-middle-logo" to="/"><i className="fa-solid fa-book icon-logo"></i> Book Store</Link>
        <div className="header-middle-search-box">
          <input
            className="header-middle-search-input"
            type="search"
            placeholder="Search in book store..."
          />
          <i className="fa-solid fa-magnifying-glass icon-search"></i>
        </div>
        {cartItems.length > 0 && (<b className="header-middle-cart-notifications">{cartItems.length}</b>)}
        <Link to="/cart" className="header-middle-cart-wrapper">
          <i className="fa-solid fa-cart-shopping icon-cart"></i>
        </Link>
        <div onClick={()=>{setNav(!nav)}} className="nav-menu">
          <li className="fa-solid fa-bars"></li>
        </div>
      </div>
    )
}