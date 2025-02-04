import React from 'react';
import { Box, Button, HStack, VStack, Input } from '@chakra-ui/react';
import { formatCurrency, getDaysDifference } from '../utils';
import ProgressBar from './ProgressBar';

const CapaignerProgressBox = ({
    
    getSingleUser,
    setAmount,
    handleClick,
    errorMessage
}) => {
    return (
        <Box
            w={["97%", "97%", "97%", "50%"]}
            mx={"auto"}
            border="2px solid rgba(0, 0, 0, 0.4)"
            p="0.5rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box
                bgColor="#EF4F5F"
                color="white"
                py="1rem"
                px="1.5rem"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                h="auto"
            >
                <VStack width="100%" alignItems="flex-start" gap="0.2rem">
                    <Box fontWeight="semibold" fontSize="2rem">
                        RAISED
                    </Box>
                    <Box fontSize="2.2rem" fontWeight="bold">
                        {formatCurrency(getSingleUser?.raisedFund)}
                    </Box>
                    <Box fontSize="2rem" fontWeight="semibold">
                        GOAL{" "}
                        {formatCurrency(getSingleUser?.campaignDetails?.targetAmount)}
                    </Box>
                </VStack>

                <HStack w={"100%"} justifyContent={"space-between"} my={"1rem"}>
                    <VStack
                        fontWeight={"semibold"}
                        fontSize={"1.5rem"}
                        gap={"2px"}
                        alignItems={"flex-start"}
                    >
                        <Box>DAYS LEFT</Box>
                        <Box fontSize={"1.8rem"}>
                            {getDaysDifference(
                                getSingleUser?.campaignDetails?.enddate
                            )}
                        </Box>
                    </VStack>
                    <VStack
                        fontWeight={"semibold"}
                        fontSize={"1.5rem"}
                        gap={"2px"}
                        alignItems={"flex-start"}
                    >
                        <Box>FUNDERS</Box>
                        <Box fontSize={"1.8rem"}>{getSingleUser?.totalFunders}</Box>
                    </VStack>
                </HStack>
                <Box>
                    <ProgressBar
                        currentAmount={getSingleUser?.raisedFund}
                        goalAmount={getSingleUser?.campaignDetails?.targetAmount}
                    />
                </Box>
            </Box>
            <VStack p="1rem" w={"100%"} alignItems={"flex-start"} gap={"1.5rem"}>
                <Box fontSize="1rem" fontWeight={"semibold"}>
                    Accepts funds from Indian Passport / ID holders only.
                </Box>
                <VStack w={"100%"} gap={"1rem"}>
                    {getDaysDifference(
                        getSingleUser?.campaignDetails?.enddate
                    ) === 0 ? (
                        <Box fontSize={"1.2rem"} color={"red.500"}>
                            Successful
                        </Box>
                    ) : (
                        <Box w={"100%"}>
                            <Input
                                type="number"
                                placeholder="Enter Amount"
                                onChange={(e) => setAmount(e.target.value)}
                                h={"50px"}
                            />
                        </Box>
                    )}
                    <Button
                        w={"100%"}
                        h={"50px"}
                        bgColor="#EF4F5F"
                        color={"white"}
                        fontWeight={"bold"}
                        fontSize={"1.1rem"}
                        _hover={"none"}
                        onClick={handleClick}
                        isDisabled={
                            getDaysDifference(
                                getSingleUser?.campaignDetails?.enddate
                            ) === 0
                        }
                    >
                        CONTRIBUTE
                    </Button>
                    <Box fontWeight={"bold"} color={"red.500"}>
                        {errorMessage}
                    </Box>
                </VStack>
            </VStack>
        </Box>
    );
};

export default CapaignerProgressBox;