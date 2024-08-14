import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Admin from '../admin/components/Admin'

export const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/*'element={<Admin/>} ></Route>
      </Routes>
    </div>
  )
}


