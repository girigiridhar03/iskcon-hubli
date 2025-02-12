import React, { useEffect, useState } from 'react'
import HomeDetails from '../Components/HomePageComponents/HomeDetails'
import HomeCards from '../Components/HomePageComponents/HomeCards'

import CampaignProgressDetails from '../Components/HomePageComponents/CampaignProgressDetails'
import { Box } from '@chakra-ui/react'
import HeadingBanner from '../Components/HomePageComponents/HeadingBannerNew'

import { BE_API_URL } from '../constants/homePage'
import Fotter from '../Components/HomePageComponents/Fotter'

import { IskconFontColor, IskconBgColor } from "../Components/utils.jsx";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [campaignsData, setCampaignsData] = useState(null);
  const [allCampaigners, setAllCampaigners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const campaignData = await fetchMoreData();
      setCampaignsData(campaignData);
    }
    fetchData();
  }, []);

  function filteredSearch(campaigns, searchQuery) {
    return campaigns.filter((campaign) =>
      campaign.campaignName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`${BE_API_URL}/showcampaigns?limit=10&page=${page}`);
      const data = await response.json();
      setCampaigns((prevCampaigns) => {
        const newCampaigns = data.campaignDetails.filter(
          (newCampaign) => !prevCampaigns.some((campaign) => campaign.campaignId === newCampaign.campaignId)
        );
        return [...prevCampaigns, ...newCampaigns];
      });
      setPage(page + 1);
      if (data.campaignDetails.length === 0) {
        setHasMore(false);
      }
      return data;
    } catch (error) {
      setIsError(error.message);
      return null
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box position={'relative'} maxWidth='1200px' display='flex' flexDirection='column' alignItems='center' >
      <HeadingBanner />
      <CampaignProgressDetails
        currentAmount={Number(campaignsData?.totalraisedamt) || 0}
        goalAmount={Number(campaignsData?.totalgoalamt) || 0}
      />
      <HomeCards
        isLoading={isLoading}
        isError={isError}
        campaigns={searchQuery ? filteredSearch(allCampaigners, searchQuery) : campaigns}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        filteredSearch={filteredSearch}
        totalCampaigners={Number(campaignsData?.totalcampaigncount) || 0}
        setAllCampaigners={setAllCampaigners}
        allCampaignersLength={allCampaigners?.length || 0}
      />
      {/* <HomeTeams /> */}
      <HomeDetails />
      <Fotter />
    </Box>
  )
}

export default HomePage
