import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import DottedAnimation from "../DottedAnimation";
import { calculatePercentage, formatCurrency, getDaysDifference, themeColor } from "../utils";
import InfiniteScroll from 'react-infinite-scroll-component';

const HomeCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMoreData();
  }, []);

  // useEffect(() => {

  //     const filteredCampaigns = 
  //     setCampaigns(filteredCampaigns);

  // }, [searchQuery]);

  function filteredSearch(campaigns, searchQuery) {
    return campaigns.filter((campaign) =>
      campaign.campaignName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`https://razor.ygntechstartup.workers.dev/showcampaigns?limit=4&page=${page}`);
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
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isError) {
    alert(isError);
  }

  return (
    <Box
      mx="auto"
      minW={'100%'}
      p={["0.3rem", "0.5rem", "1rem", "1.5rem"]}
      borderRadius="10px"
      maxW="1200px"
      bg="white"
      boxShadow="lg"
      mb={'10px'}
      minH={'30vh'}

    >
      <Box w="100%">
        <Box mx="auto" textAlign="center" mb={1} mt={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <HStack justifyContent="center" fontWeight="900" color="teal.600" fontSize={["0.7rem", "1rem", "1.6rem", "1.8rem"]}>
            <Box>CAMPAIGNERS JOINED:</Box>
            <Box>
              {campaigns?.length === 0 ? '0' : campaigns?.length <= 9 ? `0${campaigns?.length}` : campaigns?.length}
            </Box>
          </HStack>
          <Input
            w={['150px', '150px', '180px', '200px']}
            h={['20px', '40px', '40px', '40px']}
            type="text"
            placeholder="Search campaigners"
            fontSize={["0.7rem", "1rem", "1.2rem", "1.2em"]}
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: ["1rem", "1rem", "0", "0"]
            }}
            onChange={(e) => { setSearchQuery(e.target.value) }}
          />
        </Box>
        {campaigns?.length > 0 ? (
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
          >
            <SimpleGrid
              columns={[1, 1, 2, 2, 3, 4]}
              spacing={[5, 5, 5, 10, 10]}
              w="100%"
              mx="auto"
              p="10px"
            >
              {filteredSearch(campaigns, searchQuery)?.map((user, i) => (
                <Link key={user.campaignId} to={`/single/${user.campaignId}`}>
                  <Card w="100%" overflow="hidden" h="100%" boxShadow="md" borderRadius="10px">
                    <Box w="100%" h={["250px", "250px", "250px", "300px", "250px"]}>
                      <Image
                        w="100%"
                        h="100%"
                        src={user?.imgurl}
                        alt={user?.campaignName}
                        objectFit="cover"
                        borderTopRadius="10px"
                      />
                    </Box>
                    <CardBody bg="gray.100" px="7px">
                      <Text fontSize="1.1rem" fontWeight="700" mb={2} color="gray.700">
                        {user.campaignName.toUpperCase()}'S CAMPAIGN TO BUILD A
                        MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN
                        HUBLI-DHARWAD, KARNATAKA.
                      </Text>
                      <Text fontSize="0.9rem" mb={2} color="gray.600">{user.desc}</Text>
                      <HStack fontSize="0.8rem" py="0.5rem" color="gray.500">
                        <Box color="red.500">ISKCON HUBLI-DHARWAD</Box>{" "}
                        <Box>|</Box>
                        <HStack>
                          <Box color="red.500">
                            <FaLocationDot />
                          </Box>
                          <Box>Hubli-Dharwad</Box>
                        </HStack>
                      </HStack>
                      <Text fontSize="0.9rem" mt={2} color="gray.600">
                        I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.
                      </Text>
                    </CardBody>
                    <CardFooter
                      bgColor="teal.600"
                      display="flex"
                      flexDirection="column"
                      py="5px"
                      px="8px"
                      borderBottomRadius="10px"
                    >
                      <HStack
                        color="white"
                        fontWeight="700"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Box>{formatCurrency(user?.totalRaisedAmount)}</Box>
                        <Box>{formatCurrency(user?.targetamt)}</Box>
                      </HStack>
                      <ProgressBar
                        currentAmount={user?.totalRaisedAmount}
                        goalAmount={user?.targetamt}
                      />
                      <HStack
                        color="white"
                        fontWeight="700"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Box>{calculatePercentage(user?.targetamt, user?.totalRaisedAmount)}%</Box>
                        <Box>{getDaysDifference(user?.enddate.split("T")[0])} Days LEFT</Box>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        ) : (
          <Box
            position="absolute"
            top="35%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            w="100%"
            fontWeight="bold"
            fontSize="1.1rem"
            color={themeColor}
          >
            No Users Found
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomeCards;
