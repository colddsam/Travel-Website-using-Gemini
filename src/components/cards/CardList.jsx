import React from 'react'
import './Cards.css'
import Card from './Card'
import { TravelDataset } from '../../data/Data'
const CardList = () => {

  const shuffle = () => {
    return TravelDataset.sort(() => Math.random() - 0.5);
  }
  return (
    <div className='cardlist'>
          <h1>FEATURED LIST</h1>
          <div className="cards">
        {
          shuffle().slice(0,9).map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                city={item.city}
                state={item.state}
                rate={item.public_rating}
                description={item.description}
              />
            )
          })
          }
          </div>
    </div>
  )
}

export default CardList