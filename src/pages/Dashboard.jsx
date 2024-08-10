// src/pages/Dashboard.jsx
import Layout from "../components/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddCampusAmbassadorIndia from "../components/AddCampusAmbassadorIndia";
import ViewAllTeams from "../components/ViewAllTeams";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import InternationAddCampusAmbassador from "../components/InternationalAddCampusAmbassador";

const Dashboard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const dashboardStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  });
  return (
    <Layout>
      <div style={dashboardStyle}>
        <Routes>
          <Route
            path="add-campus-ambassador"
            element={<AddCampusAmbassadorIndia />}
          />
          <Route
            path="add-international-campus-ambassador"
            element={<InternationAddCampusAmbassador />}
          />
          <Route path="view-all-teams" element={<ViewAllTeams />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default Dashboard;
