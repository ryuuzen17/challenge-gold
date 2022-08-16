import { useState, useEffect } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { PeopleFill } from "react-bootstrap-icons";
import "./Search.css";
const Result = () => {
  const [data, setdata] = useState([]);
  const [Input, setinput] = useState("");
  const [Kategori, setkategori] = useState("");
  const [Harga, setharga] = useState("");
  const [data2, setdata2] = useState([]);
  const navigasi = useNavigate();
  function go() {
    navigasi("/");
  }

  useEffect(() => {
    fetch("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((response) => response.json())
      .then((resjson) => setdata(resjson));
  });
  function input(e) {
    setinput(e);
  }
  function kategori(e) {
    setkategori(e);
  }
  function harga(e) {
    setharga(e);
  }
  return (
    //
    <div>
      <a class="btn btn-primary ms-4 mt-4" onClick={go}>
        {" "}
        Kembali
      </a>
      <Search Oninput={input} Onkategori={kategori} Onharga={harga} />
      {data.map((items) => {
        if (items.name == Input && items.category == Kategori && items.price >= Harga / 2 && items.price <= Harga) {
          return (
            <div class="container detail2">
              <div class="row justify-content-between">
                <div class="col-md-4 mt-2"></div>
              </div>
              <div key={items.id} class="card" style={{ width: "18rem" }}>
                <img src={items.image} class="card-img-top" alt="image" />
                <div class="card-body">
                  <h5 class="card-title">{items.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a
                    class="btn btn-primary"
                    onClick={(e) => {
                      fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${items.id}`)
                        .then((response) => response.json())
                        .then((resjson) => setdata2(resjson));
                      const get = document.querySelector(".detail");
                      const get2 = document.querySelector(".detail2");
                      get.classList.toggle("display");
                      get2.classList.toggle("display");
                      e.preventDefault();
                    }}
                  >
                    Pilih Mobil
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div class="container detail display">
        <div class="row">
          <div class="col-md-1 ms-3 mt-3 mb-5">
            <a
              href="search"
              class="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                const get = document.querySelector(".detail2");
                const get2 = document.querySelector(".detail");
                get.classList.toggle("display");
                get2.classList.toggle("display");
              }}
            >
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
    </div>
  );
};
export default Result;
