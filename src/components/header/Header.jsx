import { useState } from "react";
import HeaderMiddle from "./Header-Middle";
import HeaderTop from "./Header-Top";
import Nav from "./Nav";
import "./header.css";
export default function Header() {
    const [nav,setNav] = useState(false)
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle nav={nav} setNav={setNav}/>
      <Nav nav={nav}/>
    </header>
  );
}
