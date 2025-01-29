import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage';
import MainLayout from '../Layouts/MainLayout';
import HomeSinglePage from '../Pages/HomeSinglePage';
import AdminLayout from '../Layouts/AdminLayout';
import AdminWelcome from '../Components/AdminPageComponents/AdminWelcome';
import AdminCampaignList from '../Components/AdminPageComponents/AdminCampaignList';
import AdminCreateCampaign from '../Components/AdminPageComponents/AdminCreateCampaign';
import AdminEdit from '../Components/AdminPageComponents/AdminEdit';
import AdminDonorsList from '../Components/AdminPageComponents/AdminDonorsList';
const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
       <Route path='/' element={<HomePage />} />
       <Route path='/:id' element={<HomeSinglePage />} /> 
      </Route>

      <Route element={<AdminLayout />}>
        <Route path='/admin/welcome' element={<AdminWelcome />} />
        <Route path='/admin/campaignlist' element={<AdminCampaignList />} />
        <Route path='/admin/createcampaign' element={<AdminCreateCampaign />} />
        <Route path='/admin/campaignedit/:id' element={<AdminEdit />} />
        <Route path='/admin/donorsList' element={<AdminDonorsList />} />
      </Route>
    </Routes>
  )
}

export default AllRoutes
