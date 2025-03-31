import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
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
