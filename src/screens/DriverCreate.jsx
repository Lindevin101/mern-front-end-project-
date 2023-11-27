import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDriver } from "../services/drivers.js";

export default function DriverCreate() {
  const [driver, setDriver] = useState({
    name: "",
    nationality: "",
    team: "",
    officialNumber: "",
    podiums: "",
    wins: "",
    poster: "", 
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDriver(driver);
    navigate("/add-driver");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  return (
    <div id="add-driver-screen">
      <h1>Add a driver to our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="create-form-label">
          Name:
          <input
            className="create-form-input"
            type="text"
            name="name"
            placeholder="Driver's Name"
            value={driver.name}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Nationality:
          <input
            className="create-form-input"
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={driver.nationality}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Team:
          <input
            className="create-form-input"
            type="text"
            name="team"
            placeholder="Team"
            value={driver.team}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Officialnumber:
          <input
            className="create-form-input"
            type="number"
            name="officialNumber"
            placeholder="Officialnumber"
            value={driver.officialNumber}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Podiums:
          <input
            className="create-form-input"
            type="number"
            name="podiums"
            placeholder="Podiums"
            value={driver.podiums}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Wins:
          <input
            className="create-form-input"
            type="number"
            name="wins"
            placeholder="Wins"
            value={driver.wins}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Poster:
          <input
            className="create-form-input"
            type="text"
            name="poster"
            placeholder="Poster URL"
            value={driver.poster}
            onChange={handleChange}
          />
        </label>

        <button id="add-driver-submit" type="submit">
          Add your driver!
        </button>
      </form>
    </div>
  );
}
