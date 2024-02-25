import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
