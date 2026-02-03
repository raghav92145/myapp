import React, { useState } from "react";

function FormValidation() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Form Validation</h3>

      {/* Name */}
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        {data.name && data.name.length < 3 && (
          <small className="text-danger">
            Name must be at least 3 characters
          </small>
        )}
      </div>

      {/* Email */}
      <div className="mb-3">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        {data.email && !data.email.includes("@") && (
          <small className="text-danger">Enter a valid email</small>
        )}
      </div>

      {/* Password */}
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        {data.password && data.password.length < 6 && (
          <small className="text-danger">
            Password must be at least 6 characters
          </small>
        )}
      </div>

      <button
        className="btn btn-primary w-100"
        disabled={
          data.name.length < 3 ||
          !data.email.includes("@") ||
          data.password.length < 6
        }
      >
        Submit
      </button>
    </div>
  );
}

export default FormValidation;
