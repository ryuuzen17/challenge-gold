import "./Search.css";
import { useState } from "react";
const Search = (props) => {
  const [Nama, aturnama] = useState("");
  const [Kategori, aturkategori] = useState("");
  const [Harga, aturharga] = useState("");

  function Name(e) {
    aturnama(e.target.value);
  }
  function Category(e) {
    aturkategori(e.target.value);
  }
  function Price(e) {
    aturharga(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    props.Oninput(Nama);
    props.Onkategori(Kategori);
    props.Onharga(Harga);
  }
  return (
    <div class="container">
      <div class="row justify-content-between search align-items-center mt-5">
        <div class="col-md-2">
          <label>Merek Mobil:</label>
          <input placeholder="*Huruf pertama harus kapital" onChange={Name} class="selec2 p-2" type={"text"} />
        </div>
        <div class="col-md-2">
          <label>Kategori:</label>
          <select onChange={Category} class="selec2 form-select" aria-label="Default select example" name="select1" id="select1">
            <option>Pilih--kategori</option>
            <option value="small">small</option>
            <option value="2 - 4 orang">2 - 4 orang</option>
            <option value="4 - 6 orang">4 - 6 orang</option>
            <option value="6 - 8 orang">6 - 8 orang</option>
          </select>
        </div>

        <div class="col-md-2">
          <label>Harga:</label>
          <select onChange={Price} class="selec2 form-select" aria-label="Default select example" name="select2" id="select2">
            <option>Pilih--Harga</option>
            <option value="600000">Rp.300.000-Rp.600.000</option>
            <option value="1000000">Rp.500.000-Rp.1.000.000</option>
            <option value="7000000">Rp.3.500.000-Rp.7.000.000</option>
          </select>
        </div>
        <div class="col-md-2 d-block">
          <label></label>
          <button type="button" onClick={submit} class="btn btn-success selec2">
            Cari Mobil
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
