import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import japan from "./assets/images/travel_img2.png"
import australia from "./assets/images/travel_img3.png"
import norway from "./assets/images/travel_img4.png"



const journalData =[
  {
    id:1,
    img:{japan},
    imgprefix:"japan",
    country:"Japan",
    name:"Mount Fuji",
    date:" 12 Jan, 2021 - 24 Jan, 2021",
    details:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

  },
  {
    id:2,
      img:{australia},
      imgprefix:"australia",
      country:"Australia",
      name:"Sydney Opera House",
      date:" 27 May, 2021 - 8 Jun, 20211",
      details:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"

  },
  {
    id:3,
      img:{norway},
      imgprefix:"norway",
      country:"Norway",
      name:"Geirangerfjord",
      date:" 01 Oct, 2021 - 18 Nov, 2021",
      details:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."



  }
]

function App() {
  

  return (
    <>
    <div className='main--div'>

    <Navbar/>
    {
      journalData.map((it)=>(
        <div key={it.id}>

          <Hero

          img={it.img}
          imgprefix={it.imgprefix}
          country={it.country}
          name={it.name}
          date={it.date}
          details={it.details}

          
          
          />

        </div>
      ))
    }
    </div>
     
    </>
  )
}

export default App
