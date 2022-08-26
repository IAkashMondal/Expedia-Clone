import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const AllRoutes = () => {
  return (
    <>
   
     <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
     </Routes> 
    </>
  )
}

export default AllRoutes
