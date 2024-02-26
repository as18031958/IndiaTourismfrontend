import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "../App.css"
import Layout from '../Layoutpage/Layout'


const DynamicPage = () => {

    const [data, setData] = useState([])


    useEffect(() => {
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
    }, [])

    const paramId = useParams().id
    console.log(paramId)
    return (
        <div>
          <Layout>
            {data.filter(item => item.id === parseInt(paramId)).map((item) => {
                return (
                    <div className='DynamicContainer'>
                        <div>
                            <img className='DynamicImg' src={item.image} alt='not found' />
                            <h1>{item.place}</h1>

                        </div>
                        <div className='DynamicText'>
                            <h3>{item.about}</h3>
                        </div>
                    </div>
                )
            })}

            <div className='MainContainer'>
                {data.filter(item => item.category === "home").map((item) => {
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

export default DynamicPage