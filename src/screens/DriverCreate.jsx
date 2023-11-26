import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDriver } from "../services/drivers.js"

export default function DriverCreate() {
  const [driver, setDriver] = useState({
    Name: "",
    Nationality: "",
   // Team: "",
   // Officalnumber: "",
   // Podiums: "",
   // Wins: "",
   // Poster: "",
})
let navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault()
    await createDriver(driver)
    navigate("/add-driver")
   }

   const handleChange = (e) => {
    const {name, vlaue} =e.target

    setDriver(prevDriver => ({
      ...prevDriver,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Add a driver to our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Driver's Name"
          value={driver.Name}
          onChange={handleChange}
        />
       {/* <input
          type="text"
          name="Nationality"
          placeholder="Nationality"
          value={driver.Nationality}
          onChange={handleChange}
        /> */)
        <button type="submit">Submit</button>
      </form>
      <h2>Current Submissions</h2>
      {submission ? handleSubmission(): null }
    </div>
  )
}