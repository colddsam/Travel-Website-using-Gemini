import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './MainCover.css'
import { coverImg } from '../../assets/Images'
import { star, share } from '../../assets/Images'
import jsonData from '../../data/Featured.json';
const MainCover = () => {
  const rating = Array.from({ length: 5 }, (_, index) => index + 1);
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef(null);
  const resettimeOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resettimeOut();
    timeoutRef.current=setTimeout(() => {
      setIdx(()=>idx===jsonData.length-1?0:idx+1);
    }, 2500);
    return () => {resettimeOut() };
  },[idx])
  return (
    <div className='maincover'>
      <div className="wrap__coverimg" style={{transform: `translateX(${-idx*100}%)`}}>
        {
          jsonData.map((item, index) => {
            return (
                <img key={index} src={coverImg[index]} alt="coverimg" />
            )
          })
        }
      </div>
      <div className="description__row">
        <div className="background__blur"></div>
        <ul className="dots_row">
            {
            jsonData.map((item, index) => {
              return (
                <li key={index} style={index===idx?{
                  height: '13px',
                  width: '13px',
                  backgroundColor: '#edede9'
                } : {
                  height: '10px',
                  width:'10px'
                }} className='dot'
                  
                  onClick={() => {
                    setIdx(index);
                  }}
                ></li>
                )
              })
            }
            
        </ul>
        
        <div className="description__wrapper">
          <div className="description__box">
            <div className="header__description">
              <h1>{ jsonData[idx].name}</h1>

              <Link to={jsonData[idx].link}>
                <img src={share} alt="redirect" />
              </Link>
            </div>
            <h2>{ jsonData[idx].location}</h2>
            <ul className="stars">
              {
                rating.map((item,index) => {
                  return (
                    <li key={index}><img className='rating__img' src={index+1>jsonData[idx].star?star[0]:star[1]} alt="rating" /></li>
                  )
                })
              }
            </ul>
            <div className="description">
              {jsonData[idx].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCover