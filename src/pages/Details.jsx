import React, { useEffect, useState } from 'react'
import '../styles/Details.css'
import { useParams } from 'react-router-dom'
import { detailsPicture, importance, people, star, time, hotel, picture } from '../assets/Images'
import { jsonHotel, placeDetails } from '../functions/function';
import Hotel from '../components/hotel/Hotel';

const Details = () => {

    const { name,imgURL } = useParams();
    const [placeData, setPlaceData] = useState(null);
    const [hotelData, setHotelData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const datah = await jsonHotel(name);
            const data = await placeDetails(name);
            setHotelData(datah);
            setPlaceData(data)

        }

        fetchData();
        
    }, []);
  return (
      <section className='details'>
          <div className="information">
              {
                  placeData?<div className="information__innerdiv">
                  <img src={picture} alt="detailsPicture" />
                  <h1 className="name">{ name}</h1>
                  <h2 className="city">{ placeData["city"]}</h2>
                  <h3 className="monthly__visit">
                      <span><img className='subgroup' src={people} alt="people" /></span>{placeData["monthly_visit"]}
                  </h3>
                  <h3 className="year_of_establish">
                      <span><img className='subgroup' src={time} alt="time" /></span>{placeData["year_of_establish"]}
                  </h3>
                  <h3 className="importance">
                      <span><img className='subgroup' src={importance} alt="imp" /></span>
                      {placeData["importance"]}
                  </h3>
                  <p className="history">
                      {placeData['history']}
                  </p>
              </div>:null
              }
          </div>
          <ul className='hotels'>
            {
              hotelData ?
                  hotelData.map((item, index) => {
                      console.log(item)
                      return (
                          <Hotel key={index} name={item['name']} city={item['city']} price={item['price']} stars={item['rating']}/>
                      )
                  })
              : null
          }
        </ul>
    </section>
  )
}

export default Details