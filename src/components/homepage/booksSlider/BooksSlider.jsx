import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./booksSlider.css";
import Model from "../Model/Model";
import { CartContext } from "../../../context/CartContext";

export default function BooksSlider({ data, title }) {
  const { addCart } = useContext(CartContext);

  const [slide, setSlide] = useState(0);
  const [model, setModel] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  const handleModel = (data) => {
    setModel(true);
    setBookDetails(data);
  };
  const direction = (direction) => {
    if (direction === "left") {
      setSlide(slide - 1);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="booksSlider">
        {slide > 0 && (
          <i
            onClick={() => direction("left")}
            className="las la-arrow-circle-left icon-arrow icon-arrow-left"
          ></i>
        )}
        <div
          style={{ transform: `translateX(${slide * -340}px)` }}
          className="wrapper"
        >
          {data.map((item, i) => {
            return (
              <div className="item" key={i}>
                <img src={item.image} alt={item.title} />
                <Link className="product-title" to={`/book/${item.isbn13}`}>
                  {item.title}
                </Link>
                <p>{item.price}</p>
                <div className="icons">
                  <i
                    onClick={() => handleModel(item)}
                    className="las la-eye icon-book"
                  ></i>
                  <i
                    onClick={() => addCart({ ...item, quantity: 1 })}
                    className="las la-cart-plus icon-book"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        {slide < data.length - 1 && (
          <i
            onClick={() => direction("right")}
            className="las la-arrow-circle-right icon-arrow icon-arrow-right"
          ></i>
        )}
        {model && <Model data={bookDetails} close={setModel} />}
      </div>
    </>
  );
}
