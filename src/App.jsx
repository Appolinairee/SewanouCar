import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contact/Contact";
import Connexion from "./components/Connexion";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
