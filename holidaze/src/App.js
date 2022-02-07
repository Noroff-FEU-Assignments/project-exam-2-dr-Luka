import "./sass/style.scss";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Messages from "./components/admin/messages/Messages";
import Enquiries from "./components/admin/enquiries/Enquiries";
import Details from "./components/details/Details";
import Dashboard from "./components/admin/dashboard/Dashboard";
import CreateNew from "./components/admin/createNew/CreateNew";
import MessageSent from "./components/common/MessageSent";
import Booked from "./components/common/Booked";
import EstablishmentCreated from "./components/common/EstablishmentCreated";

import Navigation from "./components/layout/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <div className="page">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Enquiries" element={<Enquiries />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreateNew" element={<CreateNew />} />
          <Route path="/MessageSent" element={<MessageSent />} />
          <Route
            path="/EstablishmentCreated"
            element={<EstablishmentCreated />}
          />

          <Route path="/Booked" element={<Booked />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
