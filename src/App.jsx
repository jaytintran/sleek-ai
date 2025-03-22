import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Navbar from "@/components/layout/Navbar";
import ButtonGradient from "@/assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
