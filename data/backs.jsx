import React from "react";

function Backs({ data, onDelete, onUpdate }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1d3c6b",
        color: "#f8e9a1",
        borderRadius: "15px",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
        marginTop: "30px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#f8e9a1", fontSize: "2em" }}>
        Registered Users
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>ID</th>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>First Name</th>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>Last Name</th>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>Address</th>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>Gender</th>
            <th style={{ padding: "12px", backgroundColor: "#003366" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", textAlign: "center" }}>{user.id}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{user.firstName}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{user.lastName}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{user.address}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{user.gender}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                <button
                  onClick={() => onUpdate(user.id)}
                  style={{
                    backgroundColor: "#ffcc00",
                    color: "#003366",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  style={{
                    backgroundColor: "#ff3300",
                    color: "#003366",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Backs;
