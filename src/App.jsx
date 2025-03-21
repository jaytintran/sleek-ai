import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/scenes/home/Home";
import About from "./scenes/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
