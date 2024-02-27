import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../Layoutpage/Layout'
import { NavLink, useNavigate } from 'react-router-dom'
import CarouselComponent from './Corousel'
import "../App.css"

const IndiaTourism = () => {
    const [data, setData] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            const fetchData = async () => {
                try {

                     const url = "https://indiatourismbackend-mib5.onrender.com/api/data"
                    const response = await axios.get(url);
                    setData(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchData()
        }
        else{
            // alert("login First!")
            Navigate("/login")
        }
    },[Navigate])

    return (
        <div>
            <Layout>
              <CarouselComponent/>
            {data.filter(item => item.category === "India Tourism").map((item) => {
                return (
                    <div className='TextArea'>
                        <p>{item.maintext}</p>
                    </div>
                )
            })}

            <div className='MainContainer'>
                {data.filter(item => item.category === "India Tourism").map((item) => {
                    return (
                        <div className='innerContainer'>
                            <NavLink to={`/Dynamic/${item.id}`}>
                                <img src={item.image} alt='not found' />
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

export default IndiaTourism