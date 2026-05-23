import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./componets/About";
import { Navbar } from "./componets/Navbar";
import { Home } from "./componets/Home";
import { Features } from "./componets/Features";
import { Contact } from "./componets/Contact";

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/Features" element={<Features />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;