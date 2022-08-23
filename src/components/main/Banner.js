import mobil from "../header/img/mobil.png";
import { Link } from "react-router-dom";
import "../header/Header.css";

const Banner = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 mt-5">
          <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <Link type="button" class="btn btn-success" to={"/search"}>
            Mulai Sewa Mobil
          </Link>
        </div>
        <div class="col-md-6 mt-5">
          <img class="img-fluid" src={mobil} width="600px" height="400px" alt="mobil" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
