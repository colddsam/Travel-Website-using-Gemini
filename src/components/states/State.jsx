import React from 'react'
import { Link } from 'react-router-dom'
import { coverImg } from '../../assets/Images'

const State = ({state}) => {
  return (
      <Link className='state' to='/'>

          <img src={coverImg[0]} alt="state" />
            <div className="state__effect">
        <h2>{ state}</h2>
            </div>
    </Link>
  )
}

export default State