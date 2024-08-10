// src/components/Sidebar.js
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  const sidebarStyle = {
    width: "250px",
    padding: "20px",
    backgroundColor: "#415a77",
    borderRight: "1px solid #ddd",
    height: "100vh",
    position: "fixed",
    color: "#fff",
    top: 0,
    left: 0,
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ fontSize: "25px", color: "#fff" }}>ISRC Admin Panel</h2>
      <List>
        <ListItem button component={Link} to="add-campus-ambassador">
          <ListItemText primary="Add Campus Ambassador" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="add-international-campus-ambassador"
        >
          <ListItemText primary="Add International Campus Ambassador" />
        </ListItem>
        <ListItem button component={Link} to="view-all-teams">
          <ListItemText primary="View All Teams" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
