import kotak from "./img/kotak1.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const bfore = useNavigate();
  function prev() {
    bfore("/");
  }
  return (
    <div className="body">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="kotak-header ms-3">
          <img src={kotak} alt="logo" />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="navbarOffcanvasLg" tabIndex={-1} aria-labelledby="navbarOffcanvasLgLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" onClick={prev} href="#ourservice" aria-current="page">
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={prev} href="#whyus">
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={prev} href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={prev} href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
