import React, { useState } from "react";

function Data({ onRegister }) {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.id ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.gender
    ) {
      alert("Please fill all the fields.");
      return;
    }

    onRegister(formData);

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
    });

    alert("You have been registered!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1f3d, #1e2a3a)",
        color: "#f8e9a1",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#f8e9a1", fontSize: "2.5em" }}>
        Register New User
      </h1>
      <div
        style={{
          backgroundColor: "#1d3c6b",
          padding: "20px",
          borderRadius: "15px",
          margin: "0 auto",
          maxWidth: "600px",
          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#0e264d",
              color: "#f8e9a1",
              marginTop: "5px",
              border: "none",
            }}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#0e264d",
              color: "#f8e9a1",
              marginTop: "5px",
              border: "none",
            }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#0e264d",
              color: "#f8e9a1",
              marginTop: "5px",
              border: "none",
            }}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#0e264d",
              color: "#f8e9a1",
              marginTop: "5px",
              border: "none",
            }}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#0e264d",
              color: "#f8e9a1",
              marginTop: "5px",
              border: "none",
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          style={{
            background: "linear-gradient(135deg, #f8e9a1, #ffcc00)",
            color: "#003366",
            border: "none",
            borderRadius: "30px",
            padding: "12px 20px",
            cursor: "pointer",
            width: "100%",
            fontSize: "1em",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          Register User
        </button>
      </div>
    </div>
  );
}

export default Data;
