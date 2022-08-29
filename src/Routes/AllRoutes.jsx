import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Login from '../Components/Log/Login'
import Signup from '../Components/Log/Signup'
import ProductPage from '../Components/ProductPage'
import { Support } from '../Components/Support'
import Error from './Error'


const AllRoutes = () => {
  return (
    <>
   
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/sign-in" element={<Login/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/product" element={<ProductPage/>}/>

      <Route path="*" element={<Error/>} />
     </Routes> 
    </>
  )
}

export default AllRoutes
