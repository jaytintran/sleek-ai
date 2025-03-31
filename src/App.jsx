import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Navbar from "@/components/layout/Navbar";
import ButtonGradient from "@/assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
