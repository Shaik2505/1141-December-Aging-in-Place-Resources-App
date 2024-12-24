import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./components/Body";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import UserProfile from "./pages/UserProfile";
import Help from "./components/Help";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/body"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contactUs" element={<Contact />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
