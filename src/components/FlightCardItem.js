import React from 'react'

const FlightCardItem = props => {
    const {flightDetails} = props 
    const {Airline} = flightDetails
  return (
    <li className='shadow-lg rounded-xl mb-3 mt-3'>
      <h5>{Airline}</h5>
    </li>
  )
}

export default FlightCardItem
 