import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";

const AddCampusAmbassadorIndia = () => {
  const [name, setName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [place, setPlace] = useState("");
  const [imageFile, setImageFile] = useState(null); // to hold the file

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImageFile(e.target.files[0]); // save the file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !linkedIn || !place || !imageFile) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("linkedInLink", linkedIn);
    formData.append("place", place);
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        "https://isrc-backend-gwol.onrender.com/api/admin/add-campus-ambassador", // Ensure this path matches your backend route
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      // Clear form fields
      setName("");
      setLinkedIn("");
      setPlace("");
      setImageFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
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
        Add Campus Ambassador
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="LinkedIn Link"
          variant="outlined"
          fullWidth
          margin="normal"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />
        <TextField
          label="Place"
          variant="outlined"
          fullWidth
          margin="normal"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <Box mt={2} mb={2}>
          <Button variant="contained" component="label">
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddCampusAmbassadorIndia;
