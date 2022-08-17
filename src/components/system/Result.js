import { useState, useEffect } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Search.css";
const Result = () => {
  const [data, setdata] = useState([]);
  const [Input, setinput] = useState("");
  const [Kategori, setkategori] = useState("");
  const [Harga, setharga] = useState("");
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
                  <Link class="btn btn-primary" to={`/detail/${items.id}`}>
                    Pilih Mobil
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Result;
