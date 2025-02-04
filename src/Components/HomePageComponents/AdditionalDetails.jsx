import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsPinFill } from 'react-icons/bs';
import { FaCalendarDays } from 'react-icons/fa6';
import { HiMiniTag } from 'react-icons/hi2';

const AdditionalDetails = ({ getSingleUser }) => {
    return (
        <HStack
            w={"100%"}
            maxW={"1200px"}
            mx={"auto"}
            my={"1rem"}
            justifyContent={"space-between"}
            fontSize={["1rem"]}
            px={["0.5rem", "0.5rem", "2rem"]}
            flexDirection={["column", "column", "row"]}
            alignItems={"flex-start"}
            color={"rgb(0,0,0,0.7)"}
            gap={"0.9rem"}
        >
            <HStack gap={["8px"]} cursor={"pointer"}>
                <Box color={"#CA5D5D"} fontSize={["1.2rem"]}>
                    <BsPinFill />
                </Box>
                <Box>Follow campaign</Box>
            </HStack>
            <HStack gap={["8px"]} cursor={"pointer"}>
                <Box color={"#9EB875"} fontSize={["1.2rem"]}>
                    <HiMiniTag />
                </Box>
                <Box>Idea, Arts & Culture</Box>
            </HStack>
            <HStack gap={["8px"]} cursor={"pointer"}>
                <Box color={"#C75C5C"} fontSize={["1.2rem"]}>
                    <FaCalendarDays />
                </Box>
                <Box>
                    Started from{" "}
                    {getSingleUser?.campaignDetails?.startdate?.split("T")[0]}
                </Box>
            </HStack>
            <HStack gap={["8px"]} cursor={"pointer"}>
                <Box color={"#C75C5C"} fontSize={["1.2rem"]}>
                    <FaCalendarDays />
                </Box>
                <Box>
                    Ended on {getSingleUser?.campaignDetails?.enddate?.split("T")[0]}
                </Box>
            </HStack>
        </HStack>
    );
};

export default AdditionalDetails;