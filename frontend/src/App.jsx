import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblog from "./pages/createblog";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
       <Route path="/write" element={<Createblog />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userprofile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;