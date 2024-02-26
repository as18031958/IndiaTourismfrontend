import React from 'react'
import Footer from './Footer'
import Headers from './Headers'
import {Toaster} from 'react-hot-toast'
// import './Component.css'
import '../App.css'


const Layout=({children})=>{

  return (
    <div>
       <Headers/>
        <main style={{minHeight:'90vh'}}>
          <Toaster/>
          {children}</main>
        <Footer/>
    </div>
  )
}



export default Layout