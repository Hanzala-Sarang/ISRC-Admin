import { useState, useEffect } from "react";
import axios from "axios";
import "./css/campusAmbassador.css"; // Import the CSS file

const CampusAmbassadors = () => {
  const [ambassadors, setAmbassadors] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchAmbassadors = async () => {
      try {
        const response = await axios.get(
          "https://isrc-backend-gwol.onrender.com/api/admin/all-campus-ambassadors"
        );
        setAmbassadors(Object.values(response.data));
      } catch (error) {
        setError("Error fetching the ambassadors. Please try again later.");
        console.error("Error fetching the ambassadors", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched or if an error occurs
      }
    };

    fetchAmbassadors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://isrc-backend-gwol.onrender.com/api/admin/delete-campus-ambassador/${id}`
      );
      setAmbassadors(ambassadors.filter((ambassador) => ambassador.id !== id));
    } catch (error) {
      setError("Error deleting the ambassador. Please try again later.");
      console.error("Error deleting the ambassador", error);
    }
  };

  if (loading) {
    return <div className="loading">Loading ambassadors...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Campus Ambassadors</h1>
      {ambassadors.length === 0 ? (
        <p className="no-ambassadors">
          No ambassadors available at the moment.
        </p>
      ) : (
        <ul className="ambassador-list">
          {ambassadors.map((ambassador) => (
            <li key={ambassador.id} className="ambassador-item">
              <img
                src={ambassador.imageUrl}
                alt={`${ambassador.name}'s profile`}
                className="ambassador-image"
                style={{ width: "10vh", height: "10vh" }}
              />
              <div className="ambassador-info">
                <h2 className="ambassador-name">{ambassador.name}</h2>
                <p className="ambassador-place">{ambassador.place}</p>
                <a
                  href={ambassador.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ambassador-linkedin"
                >
                  LinkedIn Profile
                </a>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(ambassador.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampusAmbassadors;
