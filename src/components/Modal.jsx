import { useEffect, useRef, useState } from "react";
import { deleteDriver } from "../services/drivers.js"


export default function Modal({ driver, closeModal, closeModalKeyDown}) {
   
    const ref = useRef(null)

    useEffect(() => {
      ref.current.focus()
    }, [])
  
    async function handleDelete() {
      await deleteDriver(driver._id)
      closeModal()
      window.location.reload()
    }
  
    const [update, setUpdate] = useState(false)

    function handleUpdate() {
      setUpdate(true);
    }

    return(
        <div>
            <div className="overlay" onClick={closeModal}></div>
            <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

                <img className="modal-image" src={driver.Poster}></img>
                {update
                ?
                <div> <p>Editing</p> </div>
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
};