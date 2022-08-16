import ourservice from "./img/img-ourservice.png";
import whyus1 from "./img/gmbr-whyus1.svg";
import whyus2 from "./img/gmbr-whyus2.svg";
import whyus3 from "./img/gmbr-whyus3.svg";
import test1 from "./img/testi1.svg";
import test2 from "./img/testi2.svg";
import test3 from "./img/testi3.png";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  function go() {
    navigate("search");
  }

  return (
    <div>
      <div class="container" id="ourservice">
        <div class="row">
          <div class="col-md mt-3">
            <img class="img-fluid" src={ourservice} alt="ourservice" />
          </div>
          <div class="col-md mt-5">
            <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul>
              <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li>Sewa Mobil Jangka Panjang Bulanan</li>
              <li>Gratis Antar - Jemput Mobil di Bandara</li>
              <li>Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container" id="whyus">
        <div class="row mt-3">
          <div class="col-md">
            <h4>Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        <div class="row justify-content-between mt-3">
          <div class="lst col-md-2">
            <img class="img shadow-sm img1" src={whyus1} alt="gmbr1" />
            <p>Mobil Lengkap</p>
            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div class="lst col-md-2 mt-2">
            <img class="img shadow-sm img2" src={whyus2} alt="gmbr2" />
            <p>Harga Murah</p>
            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div class="lst col-md-2 mt-2">
            <img class="img shadow-sm img3" src={whyus3} alt="gmbr3" />
            <p>Layanan 24 Jam</p>
            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div class="lst col-md-2 mt-2">
            <img class="img shadow-sm img4" src={whyus1} alt="gmbr1" />
            <p>Sopir Profesional</p>
            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>
      <div class="sewa bg-primary text-center text-bg-dark d-flex flex-column justify-content-center align-content-center">
        <div>
          <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a onClick={go} class="btn btn-success btn-lg" role="button">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
      <div class="container" id="testimonial">
        <div class="text-center row mt-5">
          <div class="col-md">
            <h3>Testimonial</h3>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
        <div class="row justify-content-evenly mt-5 mb-5">
          <div class="col-md-3 d-flex gap-2 mt-3 testi">
            <img src={test1} alt="foto" />
            <div class="isi">
              <img src={test3} width="100px" height="30px" alt="star" />
              <p class="text-sm-start">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
            </div>
          </div>
          <div class="col-md-3 d-flex gap-2 mt-3 testi">
            <img src={test2} alt="foto" />
            <div class="isi">
              <img src={test3} width="100px" height="30px" alt="star" />
              <p class="text-sm-start">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
            </div>
          </div>
          <div class="col-md-3 d-flex gap-2 mt-3 testi">
            <img src={test1} alt="foto" />
            <div class="isi">
              <img src={test3} width="100px" height="30px" alt="star" />
              <p class="text-sm-start">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container" id="faq">
        <div class="row">
          <div class="col mt-5">
            <h3>Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="faq col-md-8 mt-5">
            <select name="select1" id="select1">
              <option value="Apa saja syarat yang dibutuhkan?">Apa saja syarat yang dibutuhkan?</option>
            </select>
            <select name="select2" id="select2">
              <option value="Berapa hari minimal sewa mobil lepas kunci?">Berapa hari minimal sewa mobil lepas kunci?</option>
            </select>
            <select name="select3" id="select3">
              <option value="Berapa hari sebelumnya sabaiknya booking sewa mobil?">Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
            </select>
            <select name="select4" id="select4">
              <option value="Apakah Ada biaya antar-jemput?">Apakah Ada biaya antar-jemput?</option>
            </select>
            <select name="select5" id="select5">
              <option className="opt" value="Bagaimana jika terjadi kecelakaan">
                Bagaimana jika terjadi kecelakaan
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
