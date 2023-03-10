import { useEffect, useState } from "react";
import BooksSlider from "../../components/homepage/booksSlider/BooksSlider";
import Services from "../../components/homepage/services/Services";
import Slider from "../../components/homepage/slider/Slider";
import Spinner from "../../components/spinner/Spinner";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [web, setWeb] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
    fetch("https://api.itbook.store/1.0/search/web")
      .then((res) => res.json())
      .then((data) => setWeb(data.books));
    fetch("https://api.itbook.store/1.0/search/mobile")
      .then((res) => res.json())
      .then((data) => setMobile(data.books));
    setSpinner(true);
  }, []);
  return (
    <>
      {spinner ? (
        <>
          <Slider />
          <Services />
          <BooksSlider data={web} title={"Web Development"} />
          <BooksSlider data={mobile} title={"Mobile Development"} />
          <BooksSlider data={books} title={"New Books"} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
