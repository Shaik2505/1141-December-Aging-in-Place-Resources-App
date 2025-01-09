import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./components/Body";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import UserProfile from "./pages/UserProfile";
import Help from "./components/Help";
import Resources from "./pages/Resources";
import HealthMonitoring from "./pages/HealthMonitoring";
import Appointments from "./pages/Appointments";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";

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
          <Route path="resources" element={<Resources />} />
          <Route path="health-monitoring" element={<HealthMonitoring />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="help" element={<Help />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
