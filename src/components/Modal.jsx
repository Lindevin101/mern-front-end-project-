import { useEffect, useRef, useState } from "react";
import { updateDriver, deleteDriver } from "../services/drivers.js";
import React from 'react';


export default function Modal({ driver, setDriver, closeModal, closeModalKeyDown }) {
  const [update, setUpdate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleDelete = async () => {
    await deleteDriver(driver._id);
    closeModal();
  };

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDriver(driver._id, {
      Name: driver.name,
      Nationality: driver.nationality,
      Team: driver.team,
      Officialnumber: driver.officialNumber,
      Podiums: driver.podiums,
      Wins: driver.wins,
    });
    setUpdate(false);
  };
  

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">
        <img className="modal-image" src={driver.Poster} alt={driver.Name} />
        {update ? (
          <div className="modal-input-container">
            <form className="modal-input" onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  className="update-form-input"
                  type="text"
                  name="Name"
                  value={driver.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Nationality:
                <input
                  className="update-form-input"
                  type="text"
                  name="Nationality"
                  value={driver.nationality}
                  onChange={handleChange}
                />
              </label>
              <label>
                Team:
                <input
                  className="update-form-input"
                  type="text"
                  name="Team"
                  value={driver.team}
                  onChange={handleChange}
                />
              </label>
              <label>
                Officialnumber:
                <input
                  className="update-form-input"
                  type="number"
                  name="Officialnumber"
                  value={driver.officialNumber}
                  onChange={handleChange}
                />
              </label>
              <label>
                Podiums:
                <input
                  className="update-form-input"
                  type="number"
                  name="Podiums"
                  value={driver.podiums}
                  onChange={handleChange}
                />
              </label>
              <label>
                Wins:
                <input
                  className="update-form-input"
                  type="number"
                  name="Wins"
                  value={driver.winsins}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <p className="modal-text">Name: {driver.name}</p>
            <p className="modal-text">Nationality: {driver.nationality}</p>
            <p className="modal-text">Team: {driver.team}</p>
            <p className="modal-text">Officialnumber: {driver.officialNumber}</p>
            <p className="modal-text">Podiums: {driver.podiums}</p>
            <p className="modal-text">Wins: {driver.wins}</p>
            <div className="modal-CRUD-buttons">
              <button onClick={handleUpdate}>EDIT</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
        <button id="x" onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
}
