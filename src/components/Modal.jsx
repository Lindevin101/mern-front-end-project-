
export default function Modal({ driver, closeModal, closeModalKeyDown}) {
   
    return(
        <div>
            <div className="overlay" onClick={closeModal}></div>
            <div onKeyDown={closeModalKeyDown} className="modal-container">

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