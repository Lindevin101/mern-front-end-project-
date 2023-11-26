import React from 'react'

export default function DriverSubmission({ driverName, driverNationality }) {
  return (
    <p>{driverName}, released {driverNationality}</p>
  )
}