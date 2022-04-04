import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Publishing from "./Components/Publishing";
import RecordAndSong from "./Components/RecordAndSong";
import TvAndFilm from "./Components/TvAndFilm";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="page-container relative min-h-screen bg-cultured font-lexendDeca">
      <Header />

      <div className="content-wrap pb-[2.5rem]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/RecordAndSong" element={<RecordAndSong />} />
          <Route path="/TvAndFilm" element={<TvAndFilm />} /> 
          <Route path="/Publishing" element={<Publishing />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
