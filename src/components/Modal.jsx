import { useEffect, useRef, useState } from "react";
import { updateDriver, deleteDriver } from "../services/drivers.js"


export default function Modal({ driver, setDriver, closeModal, closeModalKeyDown}) {
    const [update, setUpdate] = useState(false)  
    const ref = useRef(null)

    useEffect(() => {
      ref.current.focus()
    }, [])
  
    const handleDelete = async()=> {
      await deleteDriver(driver._id)
      closeModal()
    }

    const handleUpdate = () => {
      setUpdate(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
    
        setDriver(prevDriver => ({
          ...prevDriver,
          [name]: value
        }))
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDriver(driver._id, movie);
        setUpdate(false);
    }
    
    
    return(
        <div>
            <div className="overlay" onClick={closeModal}></div>
            <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

                <img className="modal-image" src={driver.Poster}></img>
                {update
                ?
            
                <div className="modal-input-container">
                    <form className="modal-input" onSubmit= {handleSubmit}>
                        <label>
                            Name:
                            <input
                            type="text"
                            name="Name"
                            value={driver.Name}
                            onChange={handleChange}
                            />
                        </label>
                        <label>
                            Nationality:
                            <input
                            type="text"
                            name="Nationality"
                            value={driver.Nationality}
                            onChange={handleChange}
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                <div>
                :
                <div>
                    <p className="modal-text">Name: {driver.Name}</p>
                    <p className="modal-text">Nationality: {driver.Nationality}</p>
                    <p className="modal-text">Team: {driver.Team}</p> 
                    <button onClick={handleDelete}>DELETE</button>
                    <button onClick={handleUpdate}>EDIT</button>
                </div>

                }

                <button id="x" onClick={closeModal}>x</button>

            </div>
        </div>
    )
}