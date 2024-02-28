import React, { useEffect, useState } from 'react'
import Layout from '../Layoutpage/Layout'
import axios from "axios"
import "../App.css"
import { NavLink } from 'react-router-dom'
import CarouselComponent from './Corousel'


const TourPackages = () => {
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
        {data.filter(item => item.category === "Tour Package").map((item)=>{
                    return(
                        <div className='TextArea'>
                            <p>{item.maintext}</p>
                        </div>
                    )
                })}

            <div className='MainContainer'>
                {data.filter(item => item.category === "Tour Package").map((item)=>{
                    return(
                        <div className='innerContainer'>
                            <NavLink to={`/Dynamic/${item.id}`}>
                            <img src={item.image} alt='not found'/>
                            <h4>{item.place}</h4>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
                </Layout>
    </div>
  )
}

export default TourPackages