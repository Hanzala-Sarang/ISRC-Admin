// src/pages/HomePage.js
import Register from "../components/Register";

const HomePage = () => {
  const pageStyle = {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "auto",
  };

  return (
    <div style={pageStyle}>
      <h1>Register to Access Admin Dashboard</h1>
      <Register />
    </div>
  );
};

export default HomePage;
