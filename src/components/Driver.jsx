export default function Driver({ driver,showModal }) {
    return (
      <div className="indiviual-driver-div">
        <div className="driver-container">
            <h2 onClick={() => showModal(driver)}>{driver.Name}</h2>
            <img onClick={() => showModal(driver)} className="driver-poster" src={driver.Poster} alt={driver.Name}/>

    {/*    <p>{ driver.nationality }</p>
        <p>{ driver.team }</p>
        <p>{ driver.officalnumber }</p>
        <p>{ driver.podiums }</p>
    <p>{ driver.wins }</p> */}</div>
      </div>
    )
  }