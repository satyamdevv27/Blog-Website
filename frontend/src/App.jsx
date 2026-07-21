import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblog from "./pages/createblog";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
       <Route path="/write" element={<Createblog />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;