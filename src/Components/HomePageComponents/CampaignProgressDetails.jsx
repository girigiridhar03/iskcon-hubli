import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { themeColor } from "../utils";

const CampaignProgressDetails = ({
  currentAmount = 4000,
  goalAmount = 10000,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (goalAmount > 0) {
      const targetPercentage = Math.min(
        (currentAmount / goalAmount) * 100,
        100
      );
      let start = 0;

      const interval = setInterval(() => {
        if (start >= targetPercentage) {
          clearInterval(interval);
        } else {
          start += 1;
          setProgress(start);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [currentAmount, goalAmount]);

  return (
    <Box
      w={["95%", "90%", "95%", "95%", "80%"]}
      mx={"auto"}
      borderRadius={"10px"}
      px={"2rem"}
      py={'2.5rem'}
      my={"2rem"}
      bgColor={themeColor}
      boxShadow={"xl"}
    >
      <HStack justify="space-between">
        <VStack align="start">
          <Box fontSize={'2rem'} fontWeight="bold" color={"white"}>
           Mandir Nirmaan Seva
          </Box>
          <Box fontSize={'1.3rem'} color={'rgb(255,255,255,0.8)'} fontWeight={'semibold'}>Sri Radha Krishna Temple and Cultural Complex</Box>
        </VStack>

        <HStack w={"45%"} gap={'1rem'}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress
              value={progress}
              size="250px"
              thickness="10px"
              color="green.400"
              trackColor="gray.700"
              capIsRound={true}
            >
              <CircularProgressLabel
                fontSize="1.9rem"
                fontWeight="bold"
                color="white"
              >
                {progress.toFixed(2)}%
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
          <VStack alignItems={"flex-start"}>
            <Box fontSize={"2rem"} fontWeight={"semibold"} color={"white"}>
              Goal Amount : 10,000
            </Box>
            <HStack alignItems={"baseline"}>
              <Box fontSize={"2.5rem"} fontWeight={"bold"}>
                4,000
              </Box>
              <Box fontSize={"1.5rem"} color={'rgb(255,255,255,0.8)'} fontWeight={"semibold"}>
                Achieved
              </Box>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default CampaignProgressDetails;
