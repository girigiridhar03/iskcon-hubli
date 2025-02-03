import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/clientSlices/clientUsers";
import { Link } from "react-router-dom";
import DottedAnimation from "../DottedAnimation";
import { calculatePercentage, formatCurrency, getDaysDifference, themeColor } from "../utils";
import avatar from '../../assets/images/Avatar-PNG-Image.webp'

const HomeCards = () => {
  const { isLoading, isError, getUsers } = useSelector(
    (state) => state.clientUsers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if(isLoading){
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <DottedAnimation />
      </Box>
    );
  }

  if(isError){
    alert(isError)
  }




  return (
    <Box
      w={["95%", "90%", "95%", "95%", "80%"]}
      mt={"4rem"}
      border={["","","","2px solid rgb(0,0,0,0.3)"]}
      mx={"auto"}
      p={["0.3rem", "0.5rem", "1rem", "1.5rem"]}
      borderRadius={"5px"}
    >
      <Box mx={"auto"}>
    
        <HStack fontWeight={"600"} fontSize={"1.3rem"}>
          <Box>CAMPAIGNERS JOINED:</Box>
          <Box>
          {getUsers?.campaignDetails?.length === 0 ? '0' : getUsers?.campaignDetails?.length <= 9 ? `0${getUsers?.campaignDetails?.length}` : getUsers?.campaignDetails?.length}
          </Box>
        </HStack>
      </Box>
      {getUsers?.campaignDetails?.length > 0 ? (
        <SimpleGrid
          columns={[1, 1, 2, 2, 3, 4]}
          spacing={[10, 10, 5, 10, 5]}
          w={"100%"}
          mx={"auto"}
          mt={"2rem"}
          p={"10px"}
        >
          {getUsers?.campaignDetails?.map((user, i) => (
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
                    alt={user?.campaignName }
                    objectFit={'cover'}
                  />
                </Box>
                <CardBody px={"7px"}>
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
                    <Box>{calculatePercentage(user?.targetamt,user?.totalRaisedAmount)}%</Box>
                    <Box>{getDaysDifference(user?.startdate.split("T")[0],user?.enddate.split("T")[0])} Days LEFT</Box>
                  </HStack>
                </CardFooter>
              </Card>
            </Link> 
          ))}
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
