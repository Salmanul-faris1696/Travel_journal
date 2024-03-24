import React from 'react'
import location from "../assets/images/location.png"

function Hero({img, imgprefix,country,name,date,details}) {
  return (
   <section className='hero--section'>

    <div className='card--img'>

    <img src={img[imgprefix]} alt="" />
    </div>


    <div className='data'>
      <div className='loctaion'>

      <img src= {location } alt="" className='loctionmarker'/>
      <h4>{country}</h4> <a href="https://www.google.com/maps/@11.3">View on Google Maps</a>
      </div>
      <h1 >
        {name}
      </h1>

      

      <p>
        <span className='date'>

           {date}
        </span>
      <br />
      {details}
      </p>
      
    </div>





   </section>
  )
}

export default Hero