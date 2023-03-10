import { Link } from "react-router-dom";

export default function Nav({nav}) {
    return (
        <nav className="navbar" style={{display: nav && "block"}}>
            <div className="links">
                <Link className="links" to="/">Home</Link>
                <Link className="links">Best sellers</Link>
                <Link className="links">PDFs</Link>
                <Link className="links">Contact</Link>
                <Link className="links">About</Link>
            </div>
        </nav>
    )
}