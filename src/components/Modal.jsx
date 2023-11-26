import { useEffect, useRef } from "react";

export default function Modal({ driver, closeModal, closeModalKeyDown}) {
    const ref = useRef(null)

    useEffect (() =>{
        ref.current.focus()
    }, [])

    return(
        <div>
            <div className="overlay" onClick={closeModal}></div>
            <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

                <img className="modal-image" src={driver.Poster}></img>
                <div>
                <p className="modal-text">Name: {driver.Name}</p>
                <p className="modal-text">Nationality: {driver.Nationality}</p>
                <p className="modal-text">Team: {driver.Team}</p> 
                </div>

                <button onClick={closeModal}>x</button>
            </div>
        </div>
    )
};