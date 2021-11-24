import "./sass/style.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";

import Navigation from "./components/layout/Navigation";

export default function App() {
  return (
    <div className="page">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}
