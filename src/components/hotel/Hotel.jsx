import React from 'react'
import { star,hotel } from '../../assets/Images'
const Hotel = ({ name, city, stars, price }) => {
  const rating = Array.from({ length: 5 }, (_, index) => index + 1);
  
  return (
      <>
        <li className="hotel">
            <img className='hotelImg' src={hotel} alt="hotel" />
            <div className="hotel_details">
                  <h1 className="name">{ name}</h1>
                  <h3 className="city">{ city}</h3>
            <ul className="stars">
                          {
                              rating.map((item, index) => {
                                  return (
                                    <li key={index} className="star"><img src={index+1>stars?star[0]:star[1]} alt="rating" /></li>
                                  )
                              })
                }
            </ul>
                  <h2 className="price">{ price}</h2>
            </div>

        </li>
      </>
  )
}

export default Hotel