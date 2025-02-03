import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  SimpleGrid,
 
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";

import { Link } from "react-router-dom";
import DottedAnimation from "../DottedAnimation";
import { calculatePercentage, formatCurrency, getDaysDifference, themeColor } from "../utils";

import InfiniteScroll from 'react-infinite-scroll-component';


const HomeCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  useEffect(() => {
    
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
    
      const response = await fetch(`https://razor.ygntechstartup.workers.dev/showcampaigns?limit=2&page=${page}`);
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
    } catch (error) {
      setIsError(error.message);
      
    }
    finally {
      setIsLoading(false);
    
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <DottedAnimation />
        <Box ml={4} fontSize="1.2rem" color="gray.600">Loading campaigns...</Box>
      </Box>
    );
  }

  if (isError) {
    alert(isError)
  }


  return (
    <Box
      mx={"auto"}
      p={["0.3rem", "0.5rem", "1rem", "1.5rem"]}
      borderRadius={"5px"}
    >
      <Box mx={"auto"}>
        <HStack marginBottom={'5px'} fontWeight={"900"} color={"green.900"} fontSize={"1.3rem"}>
          <Box>CAMPAIGNERS JOINED:</Box>
          <Box>
            {campaigns?.length === 0 ? '0' : campaigns?.length <= 9 ? `0${campaigns?.length}` : campaigns?.length}
          </Box>
        </HStack>
      </Box>
      {campaigns?.length > 0 ? (
        <SimpleGrid
          columns={[1, 1, 2, 2, 3, 4]}
          spacing={[10, 10, 5, 10, 5]}
          w={"100%"}
          mx={"auto"}
          p={"10px"}
        >
          <InfiniteScroll
            dataLength={campaigns.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <Box display="flex" justifyContent="center" alignItems="center" py={4}>
                <DottedAnimation />
                <Box ml={4} fontSize="1.2rem" color="gray.600">Loading more campaigners...</Box>
              </Box>
            }
            endMessage={
              <Box textAlign="center" py={4}>
                <Box fontSize="1.2rem" fontWeight="bold"> You have seen it all</Box>
              </Box>
            }
          >
            {campaigns?.map((user, i) => (
              <Link key={user.campaignId} to={`/single/${user.campaignId}`}>
                <Card w={"100%"} overflow={"hidden"} key={user.campaignId} h={'100%'}>
                  <Box
                    w={"100%"}
                    h={["250px", "250px", "250px", "300px", "250px"]}
                  >
                    <Image
                      w={"100%"}
                      h={"100%"}
                      src={user?.imgurl}
                      alt={user?.campaignName}
                      objectFit={'cover'}
                    />
                  </Box>
                  <CardBody bg={'#fce9e9'} px={"7px"}>
                    <Box fontSize={"0.9rem"} fontWeight={"600"}>
                      {user.campaignName.toUpperCase()}'S CAMPAIGN TO BUILD A
                      MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN
                      HUBLI-DHARWAD,KARNATAK.
                    </Box>
                    <Box fontSize={"0.8rem"}>{user.desc}</Box>
                    <HStack fontSize={"0.7rem"} py={"0.5rem"}>
                      <Box color={"red.500"}>ISKCON HUBLI-DHARWAD</Box>{" "}
                      <Box>|</Box>
                      <HStack>
                        <Box color={"red.500"}>
                          <FaLocationDot />
                        </Box>
                        <Box>Hubli-Dharwad</Box>
                      </HStack>
                    </HStack>
                    <Box fontSize={'0.8rem'}>
                      I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.
                    </Box>
                  </CardBody>
                  <CardFooter
                    bgColor={"red.500"}
                    display={"flex"}
                    flexDirection={"column"}
                    py={"5px"}
                    px={"8px"}
                  >
                    <HStack
                      color={"white"}
                      fontWeight={"700"}
                      justifyContent={"space-between"}
                      w={"100%"}
                    >
                      <Box>{formatCurrency(user?.totalRaisedAmount)}</Box>
                      <Box>{formatCurrency(user?.targetamt)}</Box>
                    </HStack>
                    <ProgressBar
                      currentAmount={user?.totalRaisedAmount}
                      goalAmount={user?.targetamt}
                    />
                    <HStack
                      color={"white"}
                      fontWeight={"700"}
                      justifyContent={"space-between"}
                      w={"100%"}
                    >
                      <Box>{calculatePercentage(user?.targetamt, user?.totalRaisedAmount)}%</Box>
                      <Box>{getDaysDifference(user?.startdate.split("T")[0], user?.enddate.split("T")[0])} Days LEFT</Box>
                    </HStack>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </InfiniteScroll>
        </SimpleGrid>
      ) : (
        <Box
          textAlign={"center"}
          w={"100%"}
          fontWeight={"bold"}
          fontSize={"1.1rem"}
          color={themeColor}
        >
          No Users Found
        </Box>
      )}
    </Box>
  );
};

export default HomeCards;
