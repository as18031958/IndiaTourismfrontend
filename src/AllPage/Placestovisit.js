import React, { useEffect, useState } from 'react'
import Layout from '../Layoutpage/Layout'
import axios from "axios"
import "../App.css"
import CarouselComponent from './Corousel'


const Placestovisit = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
      const fetchData = async () => {
          try {
            const url ="https://indiatourismbackend-mib5.onrender.com/api/data"
              const response = await axios.get(url);
              setData(response.data);
              console.log(response.data);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }
     fetchData()
  },[])

return (
  <div>
      <Layout>
        <CarouselComponent/>
      {data.filter(item => item.category === "home").map((item)=>{
                  return(
                      <div className='TextArea'>
                          <p>{item.maintext}</p>
                      </div>
                  )
              })}

          <div className='MainContainer'>
              {data.filter(item => item.category === "home" || item.category === "Tour Package").map((item)=>{
                  return(
                      <div className='innerContainer'>
                          <img src={item.image} alt='not found'/>
                          <h4>{item.place}</h4>
                      </div>
                  )
              })}
          </div>
              </Layout>
  </div>
)
}

export default Placestovisit