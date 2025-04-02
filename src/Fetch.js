import { useState, useEffect } from "react";
import "./App.css";

const Fetch = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const res = await fetch("https://softech-2.onrender.com/apstudent");
      const result = await res.json();
      setUserList(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  async function deleteUser(item) {
    console.log("Deleting user:", item);
  
    const requestOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(
        `https://softech-2.onrender.com/deletedata?name=${encodeURIComponent(item.firstname)}`,
        requestOption
      );
  
      const data = await response.json();
      console.log("Result is", data);
  
      if (data.result && data.result.deletedCount > 0) {
        console.log("User deleted successfully");
        getData(); // Refresh the data after deletion
      } else {
        console.error("Failed to delete user. Response:", data);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  

  function editUser(user) {
    console.log("Edit user:", user);
    alert(`Editing user: ${user.firstname} ${user.lastname}`);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("Component render");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Users List</h2>

      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Sr. No</th>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Phone Number</th>
              <th style={styles.th}>Date of Birth</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((item, index) => (
                <tr key={item._id} style={styles.row}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.firstname}</td>
                  <td style={styles.td}>{item.lastname}</td>
                  <td style={styles.td}>{item.course}</td>
                  <td style={styles.td}>{item.phoneno}</td>
                  <td style={styles.td}>{item.dob}</td>
                  <td style={styles.actionCell}>
                    <button onClick={() => editUser(item)} style={styles.editButton}>
                      Edit
                    </button>
                    <button onClick={() => deleteUser(item)} style={styles.deleteButton}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={styles.noData}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    backgroundColor: "#f9f9f9",
  },
  headerRow: {
    backgroundColor: "#007bff",
    color: "white",
  },
  th: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  row: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  actionCell: {
    padding: "10px",
    textAlign: "center",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loading: {
    fontSize: "18px",
    color: "#666",
  },
  noData: {
    textAlign: "center",
    padding: "10px",
    color: "#888",
  },
};

export default Fetch;
