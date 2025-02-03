import React from 'react'
import HomeDetails from '../Components/HomePageComponents/HomeDetails'
import HomeCards from '../Components/HomePageComponents/HomeCards'
import HomeTeams from '../Components/HomePageComponents/HomeTeams'
import CampaignProgressDetails from '../Components/HomePageComponents/CampaignProgressDetails'
import { Box, VStack } from '@chakra-ui/react'
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

import HeadingBanner from '../Components/HomePageComponents/HeadingBannerNew'
const HomePage = () => {
  return (
    <Box position={'relative'} bg={ '#efafaf'
} paddingTop={'10px'} maxWidth='900px' display='flex' flexDirection='column' alignItems='center' >
      <VStack bg='#ffffff' position={'fixed'} right={2} top={'40%'} fontSize={'2rem'} zIndex={20}>
        <Link to={'https://www.facebook.com/ISKCONBangaloreTemple'} target='blank'>
          <Box color={'#1877F2'} position={'relative'} _hover={{ right: '30%' }} transition='right 0.3s ease'>
            <FaSquareFacebook />
          </Box>
        </Link>

        <Link to={'https://www.instagram.com/IskconBangaloreTemple/'} target='blank'>
          <Box color={'#d93f8f'} position={'relative'} _hover={{ right: '30%' }} transition='right 0.3s ease'>
            <AiFillInstagram />
          </Box>
        </Link>

        <Link to={'https://twitter.com/iskconbangalore'} target='blank'>
          <Box position={'relative'} _hover={{ right: '30%' }} transition='right 0.3s ease'>
            <FaSquareXTwitter />
          </Box>
        </Link>

        <Link to={'https://www.youtube.com/user/iskconworld'} target='blank'>
          <Box color={'#FF0000'} position={'relative'} _hover={{ right: '30%' }} transition='right 0.3s ease'>
            <IoLogoYoutube />
          </Box>
        </Link>

        <a href="">
          <Box color={'#D93025'} position={'relative'} _hover={{ right: '30%' }} transition='right 0.3s ease'>
            <MdEmail />
          </Box>
        </a>
      </VStack>
      <HeadingBanner/>
      <CampaignProgressDetails currentAmount={1000} goalAmount={2000} />
      <HomeCards />
      <HomeTeams />
      <HomeDetails />
    </Box>
  )
}

export default HomePage
