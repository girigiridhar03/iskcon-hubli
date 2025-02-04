import React from 'react'
import HomeDetails from '../Components/HomePageComponents/HomeDetails'
import HomeCards from '../Components/HomePageComponents/HomeCards'
import HomeTeams from '../Components/HomePageComponents/HomeTeams'
import CampaignProgressDetails from '../Components/HomePageComponents/CampaignProgressDetails'
import { Box } from '@chakra-ui/react'
import HeadingBanner from '../Components/HomePageComponents/HeadingBannerNew'
import SocialMedia from '../Components/HomePageComponents/SocialMedia'

const HomePage = () => {

  return (
    <Box position={'relative'} maxWidth='900px' display='flex' flexDirection='column' alignItems='center' >
      <SocialMedia />
      <HeadingBanner />
      <CampaignProgressDetails currentAmount={1000} goalAmount={2000} />
      <HomeCards />
      <HomeTeams />
      <HomeDetails />
    </Box>
  )
}

export default HomePage
