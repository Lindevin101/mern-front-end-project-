import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DriverSubmission from "../components/DriverSubmission"
//import { createDriver } from "../services/drivers.js"

export default function DriverSubmission() {
  const [driver, setDriver] = useState({
    Name: "",
    Nationality: "",
   // Team: "",
   // Officalnumber: "",
   // Podiums: "",
   // Wins: "",
   // Poster: "",
})
const [submission, setSubmission] = useState(false)

  //let navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault();
     //await createDriver(driver)
    //navigate("/add-driver")
    setSubmission(true)
  }

  const handleSubmission = () => (
   <DriverSubmission driverName={driver.Name} driverNationality={driver.Nationality} />
    // setSubmission(false)
  )

  const handleChange = (e) => {
    const { name, value } = e.target

    setDriver(prevDriver => ({
      ...prevDriver,
      [name]: value
    }))
  }
  return (
    <div>
      <h1>Add a driver to our Database!</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Driver's Name"
          value={driver.Name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Nationality"
          placeholder="Nationality"
          value={driver.Nationality}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Current Submissions</h2>
      {submission ? handleSubmission(): null }
    </div>
  )
}