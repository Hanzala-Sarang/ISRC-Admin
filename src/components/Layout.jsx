// src/components/Layout.jsx
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    marginLeft: "250px", // Same as Sidebar width
    padding: "20px",
    flexDirection: "column",
  };

  return (
    <div>
      <Sidebar />
      <main style={layoutStyle}>{children}</main>
    </div>
  );
};

export default Layout;
