import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productpage.css";
import Spinner from "../../components/spinner/Spinner";
import { CartContext } from "../../context/CartContext";

export default function Product() {
  // Data Center
  const { addCart } = useContext(CartContext);
  const [quantity,setQuantity] = useState(0);

  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  const { isbn13 } = useParams();
  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(true);
      });
  }, [isbn13]);

  return (
    <div className="book-container">
      {loading ? (
        <>
          <h1 className="title-product-page">{book.title}</h1>
          <div className="book-flex">
            <img src={book.image} alt={book.title} />
            <div className="details">
              <h1>Description</h1>
              <p>{book.desc}</p>
              <p className="price">
                price: <span>{book.price}</span>
              </p>
              <div className="cart">
                <input min="1" max="100" type="number" placeholder="1" value={quantity} onChange={v=> setQuantity(v.target.value)} />
                <button onClick={()=> addCart({...book,quantity})}>
                  <i className="las la-cart-plus"></i>Add to Cart
                </button>
              </div>
              <hr className="line" />
              <div className="table-details">
                <table>
                  <tbody>
                    <tr>
                      <td className="col-one">Publisher</td>
                      <td>{book.publisher}</td>
                    </tr>
                    <tr>
                      <td className="col-one">Authors</td>
                      <td>{book.authors}</td>
                    </tr>
                    <tr>
                      <td className="col-one">Pages Count</td>
                      <td>{book.pages}</td>
                    </tr>
                    <tr>
                      <td className="col-one">Publish Date</td>
                      <td>{book.year}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
