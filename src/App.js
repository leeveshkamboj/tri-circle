import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ContactUs } from "./components/contactUs/contactUs";
import { Home } from "./components/home/home";
import { Navbar } from "./components/UI/navbar/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
