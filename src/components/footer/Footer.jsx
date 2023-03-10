import "./footer.css"
export default function Footer() {
    return(
        <footer>
            <div className="social-media">
                <i className="lab la-facebook"></i>
                <i className="lab la-twitter"></i>
                <i className="lab la-whatsapp"></i>
                <i className="lab la-github"></i>

            </div>
            <div className="links">
                <a href="/">About</a>
                <a href="/">Polices</a>
                <a href="/">Contact</a>

            </div>
            <div className="copy-right">
                <p>Designed By <a target="_blank" href="https://github.com/aashahin" rel="noreferrer">Abdelrahman Shaheen</a></p>
            </div>
        </footer>
    )
}