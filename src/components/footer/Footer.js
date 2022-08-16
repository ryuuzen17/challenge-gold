import gmbr from "../header/img/kotak1.svg";
import { Facebook, Instagram, Twitter, Twitch, Envelope } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const bfore = useNavigate();
  function prev() {
    bfore("/");
  }
  return (
    <footer>
      <div class="container">
        <div class="row mt-5 justify-content-between">
          <div class="col-md-2 mt-5">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div class="col-md-2 mt-5 d-flex flex-column gap-3">
            <a class="text-decoration-none text-dark" onClick={prev} href="#ourservice">
              Our services
            </a>
            <a class="text-decoration-none text-dark" onClick={prev} href="#whyus">
              Why Us
            </a>
            <a class="text-decoration-none text-dark" onClick={prev} href="#testimonial">
              Testimonial
            </a>
            <a class="text-decoration-none text-dark" onClick={prev} href="#faq">
              FAQ
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <p>Connect with us</p>
            <div class="socmed d-flex gap-2">
              <Facebook />
              <Instagram
                onClick={() => {
                  URL("https://www.instagram.com/ihlssul_akbr/");
                }}
              />
              <Twitter />
              <Twitch />
              <Envelope />
            </div>
          </div>
          <div class="col-md-2 mt-5">
            <p>Copyright Binar 2022</p>
            <img src={gmbr} alt="kotak" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
