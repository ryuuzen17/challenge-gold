import { useState, useEffect } from "react";
import { PeopleFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [data2, setdata2] = useState([]);
  const navigate = useNavigate();
  function go() {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((response) => response.json())
      .then((resjson) => setdata2(resjson));
  });

  return (
    <div class="container detail">
      <div class="row">
        <div class="col mt-3 ms-3 mb-3">
          <a class="btn btn-success" onClick={go}>
            Kembali
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <h4>Tentang Paket</h4>
          <h4>Include</h4>
          <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <h4>Exclude</h4>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <h4>Refund, Reschedule, Overtime</h4>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          </ul>
        </div>
        <div class="col-md-4">
          <img src={data2.image} width="270px" height="160px" />
          <p>{data2.name}</p>
          <figcaption class="d-flex">
            <PeopleFill />
            {data2.category}
          </figcaption>
          <div class="mt-5 d-flex justify-content-between">
            <h4>Total</h4>
            <h4>Rp.{parseInt(data2.price).toLocaleString()}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
