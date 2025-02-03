
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { formatCurrency, themeColor } from "../utils";
import CountUp from "react-countup";

const CampaignProgressDetails = ({ currentAmount, goalAmount }) => {
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
      w={"95%"}
      mx="auto"
      borderRadius="10px"
      px={["1.5rem", "2rem"]}
      py={["0.5rem", "0.5rem"]}
      bgColor={themeColor}
      boxShadow='dark-lg'
      marginBottom='10px'
    >
      {/* Responsive Layout: Stack on mobile, HStack on larger screens */}
      <Stack
        direction={["column", "column", "row"]}
        spacing={["0.2rem", "1rem"]}
        
        align="center"
      >
        {/* Circular Progress */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress
            value={progress}
            size={["100px", "130px", "150px"]}
            thickness="10px"
            color="green.400"
            trackColor="gray.700"
            capIsRound={true}
          >
            <CircularProgressLabel
              fontSize={["1rem", "1.2rem", "1.5rem"]}
              fontWeight="bold"
              color="white"
            >
              {progress.toFixed(2)}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>

        {/* Campaign Details */}
        <VStack align={["center", "center", "flex-start"]} >
          {/* Target Amount */}
          <Flex align="center" gap={2} color="white" fontSize={["1.5rem", "2rem", "2rem"]}>
            <Box  fontWeight="semibold">
              Target Amount :
            </Box>
            <Box  fontWeight="semibold">
              {formatCurrency(goalAmount)}
            </Box>
          </Flex>

          {/* Achieved Amount */}
          <HStack alignItems="baseline" color="green.900">
            <Box fontSize={["2rem", "2.2rem", "2.5rem"]} fontWeight="bold">
              ₹<CountUp end={currentAmount} start={currentAmount / 2} />
            </Box>
            <Box fontSize={["1.2rem", "1.3rem", "1.5rem"]} fontWeight="bold">
              Achieved
            </Box>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CampaignProgressDetails;
