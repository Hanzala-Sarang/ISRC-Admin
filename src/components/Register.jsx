// src/components/Register.js
import { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
      <Button
        variant="text"
        color="primary"
        fullWidth
        onClick={() => navigate("/login")}
        style={{ marginTop: "10px" }}
      >
        Already have an account? Login
      </Button>
    </Container>
  );
};

export default Register;
