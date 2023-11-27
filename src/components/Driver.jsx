import React from 'react';

export default function Driver({ driver,showModal }) {
    return (
      <div className="indiviual-driver-div">
        <div className="driver-container">
            <h2 onClick={() => showModal(driver)}>{driver.Name} </h2>
            <img onClick={() => showModal(driver)} className="driver-image" src={driver.image} alt={driver.Name}/>
        </div>
      </div>
    )
  } 