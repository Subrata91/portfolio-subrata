import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Subrata</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              Ed & Ex
            </a>
          </li>
          <li>
            <a className="footer_link" href="#projects">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/subrata-mondal-007357148/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Subrata91"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.behance.net/subratamondal6"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-behance"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4ax4JzQpZT6TlimDN9bdFQ"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; Subrata Mondal. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
