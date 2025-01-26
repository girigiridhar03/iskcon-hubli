import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage';
import MainLayout from '../Layouts/MainLayout';
import HomeSinglePage from '../Pages/HomeSinglePage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
       <Route path='/' element={<HomePage />} />
       <Route path='/:id' element={<HomeSinglePage />} /> 
      </Route>
    </Routes>
  )
}

export default AllRoutes
