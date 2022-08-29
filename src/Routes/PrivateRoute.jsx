import React from 'react'
import { useContext,} from 'react'
import { Navigate} from 'react-router-dom'
import { Authcontext } from '../Context/AuthContext'
export const PrivateRoutes = ({children}) => {
    const {Auth} =useContext(Authcontext)
    if(!Auth.isAuth){
        return(
            <Navigate to="/" />
        )
    }
  return (
    <div>
        {children}
    </div>
  )
}