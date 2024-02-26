import React from 'react'
import State from './State'
import TravelData from '../../data/TravelDataset.json'
import './States.css'
const States = () => {
    const filteredOutput = (data) => [...new Set(data.map((item)=>item.state)),]
  return (
      <div className='states__wrap'>

          <h1>
              STATES
          </h1>
          <div className="statelist">
              {
                  filteredOutput(TravelData).map((item, index) => {
                      return (
                          <State key={index} state={item}/>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default States