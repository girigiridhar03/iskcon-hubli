import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const DetailPageHeader = ({ themeColor, getSingleUser, image16 }) => {
    return (
        <Box
        w={"100%"}
        bgColor={themeColor}
        color={"white"}
        py={"1.5rem"}
        px={["1.3rem", "1.5rem", "2rem"]}
      >
        <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Box
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            w={["99%", "85%", "70%"]}
            maxW={"650px"}
            lineHeight={"2rem"}
          >
            {getSingleUser?.campaignDetails?.campaignName}'S CAMPAIGN TO BUILD A
            MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN
            HUBLI-DHARWAD, KARNATAKA.
          </Box>
          <VStack alignItems={"left"} gap={"1rem"} mt={"0.8rem"}>
            <HStack>
              <Box>
                <FaLocationDot />
              </Box>
              <Box>Hubli-Dharwad, Karnataka, India</Box>
            </HStack>

            <HStack>
              <Link to={'/'}>
                <Box
                  w={"80px"}
                  h={"80px"}
                  overflow={"hidden"}
                  borderRadius={"50%"}
                >
                  <Image
                    h={"100%"}
                    w={"100%"}
                    objectFit={"cover"}
                    src={image16}
                  />
                </Box>
              </Link>
              <VStack alignItems={"flex-start"} gap={"5px"}>
                <Box fontWeight={"bold"}>ISKCON HUBLI-DHARWAD</Box>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    );
};

export default DetailPageHeader;