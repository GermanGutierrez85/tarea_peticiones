import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetUsers from "../components/GetUsers";
import CreateUser from "../components/CreateUser";
import CreateUserForm from "../components/CreateUserForm";
import Navbar from "../components/Navbar";

export default function MainRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetUsers />} />
        <Route path="/crear" element={<CreateUser />} />
        <Route path="/form" element={<CreateUserForm />} />
      </Routes>
    </Router>
  );
}
