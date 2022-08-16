import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Result from "./components/system/Result";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
