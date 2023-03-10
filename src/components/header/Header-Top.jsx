import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-phone">
        <i className="fa-solid fa-phone-volume icon-top-header"></i>45-084-564
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <div className="header-top-link">
        <Link to="/login">
          <i className="fa-solid fa-right-to-bracket icon-top-header"></i>
          Login
        </Link>
      </div>
    </div>
  );
}
