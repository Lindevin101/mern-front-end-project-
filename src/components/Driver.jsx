export default function Driver({ driver }) {
    return (
      <div>
        <p>{ driver.name }</p>
        <p>{ driver.nationality }</p>
        <p>{ driver.team }</p>
        <p>{ driver.officalnumber }</p>
        <p>{ driver.podiums }</p>
        <p>{ driver.wins }</p>
      </div>
    )
  }