import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createDriver } from "../services/drivers.js"
import React from 'react';


export default function DriverCreate() {
  const [driver, setDriver] = useState({
    Name: "",
    Nationality: "",
    Team: "",
    Officalnumber: "",
    Podiums: "",
    Wins: "",
    Poster: "",
})
let navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault()
    await createDriver(driver)
    navigate("/add-driver")
   }

   const handleChange = (e) => {
    const {name, value} =e.target

    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value
    }))
  }

  return (
    <div id="add-driver-screen">
      <h1>Add a driver to our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="create-form-label">
          Name:
          <input
          className="create-form-input"
          type="text"
          name="Name"
          placeholder="Driver's Name"
          value={driver.Name}
          onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Nationality:
          <input
          className="create-form-input"
          type="text"
          name="Nationality"
          placeholder="Nationality"
          value={driver.Nationality}
          onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Team:
          <input
          className="create-form-input"
          type="text"
          name="Team"
          placeholder="Team"
          value={driver.Team}
          onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Officialnumber:
          <input
          className="create-form-input"
          type="number"
          name="Officalnumber"
          placeholder="Officalnumber"
          value={driver.Officalnumber}
          onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Podiums:
          <input
          className="create-form-input"
          type="number"
          name="Podiums"
          placeholder="Podiums"
          value={driver.Podiums}
          onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Wins:
          <input
          className="create-form-input"
          type="number"
          name="WIns"
          placeholder="Wins"
          value={driver.Wins}
          onChange={handleChange}
          />
        </label>

        <button id="add-driver-submit" type="submit">Add your driver!</button>
      </form>
    </div>
  )
}