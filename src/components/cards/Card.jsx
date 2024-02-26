import React from 'react'
import { coverImg, share, star } from '../../assets/Images'
import { Link } from 'react-router-dom';

const Card = ({name,city,state,description,rate}) => {
  const rating = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
    <div className="card">
    <div className="innercard">
                    <div className="front">
              <img src={coverImg[0]} alt="coverpic" />
              <div className="details">
                  <div className="details__container">
                      <h1 className="name">{ name}</h1>
                      <h2 className="location"><span>{city}</span><span>, </span><span>{ state}</span></h2>
              <ul className="stars">
                          {
                              rating.map((item, index) => {
                                  return (
                                    <li key={index} className="star"><img src={index+1>rate?star[0]:star[1]} alt="rating" /></li>
                                  )
                              })
                }
              </ul>
                  </div>
                  <div className="openlink">
                      <Link to='/'><img src={share} alt="openlink" /></Link>
                  </div>
                  <div className="effect"></div>
              </div>
                    </div>
          <div className="back">
              <img src={coverImg[0]} alt="backpic" />
                <div className="effect"></div>
              <p className="description">
                  {
                      description
                }
              </p>
                    </div>
            </div>
            </div>
  )
}

export default Card