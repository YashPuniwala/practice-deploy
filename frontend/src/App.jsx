import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
