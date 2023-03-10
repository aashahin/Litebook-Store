import { useEffect, useState } from "react";
import "./model.css";
import { Link } from "react-router-dom";
import Spinner from "../../spinner/Spinner";

export default function Model({ data,close }) {
  const [book, setBook] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${data.isbn13}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setSpinner(true)
      });
  }, [data.isbn13]);
  return (
    <div className="model" onClick={()=> close(false)}>
      <div className="content" onClick={(e)=> e.stopPropagation()}>
      {spinner ? 
      <>
        <div className="title">{book.title}</div>
        <div className="container">
        <div className="image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="info">
            <h1>Description</h1>
            <p className="desc-book">{book.desc}</p>
            <p className="info-book">price: <span>{book.price}</span></p>
            <p className="info-book">pages: <span>{book.pages}</span></p>
            <p className="info-book">author: <span>{book.authors}</span></p>
        </div>
        </div>
        <div className="icons-model">
        <Link to={`/book/${book.isbn13}`} className="las la-info-circle"></Link>
        <i onClick={()=> close(false)} className="las la-times-circle icon-close"></i>
      </div> </>: <Spinner/>}
      </div>
    </div>
  );
}
