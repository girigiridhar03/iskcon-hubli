import { AspectRatio, Box, Center, HStack, Image, useToast, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { formatCurrency, formatTimeAgo } from '../utils';
import { IskconGradientLight } from '../utils';

const CampaignMoreDetails = ({ campaign, getSingleUser, themeColor, handleImageError, avatar, imageError }) => {
    const toast = useToast();
    const toastShown = React.useRef(false);

    useEffect(() => {
        if (!toastShown.current && getSingleUser?.top10paymentDetails?.length > 0) {
            const user = getSingleUser.top10paymentDetails[0];
            toast({
               
                description: (
                    <VStack alignItems={"flex-start"} gap={".3rem"}>
                        <HStack>
                            <Box fontWeight={"bold"} color={"white"}>
                                {user?.isanonymous ? 'Anonymous' : user?.username} donated {formatCurrency(user?.amount)}{" "}
                            </Box>
                        </HStack>
                        <Box fontWeight={"bold"} color={"white"}>
                            about {formatTimeAgo(user?.date)}
                        </Box>
                    </VStack>
                ),
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom-left',
            });
            toastShown.current = true
        }
    }, [getSingleUser, toast, toastShown]);

    return (
        <HStack
            w={"100%"}
            maxW={"1200px"}
            mx={"auto"}
            alignItems={"flex-start"}
            gap={".5rem"}
            flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
            ]}
            px={["", "", "", "2rem"]}
        >
            <VStack
                w={["95%", "95%", "80%", "60%"]}
                mx={"auto"}
                gap={"1.5rem"}
                my={"2rem"}
                alignItems={"flex-start"}
            >
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.front_view} />
                </Box>

                {/* The Context */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        About the Campaign:
                    </Box>
                    <Box>{campaign.context}</Box>
                </VStack>

                {/* Image 2 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.night_view} />
                </Box>

                {/* The Background */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    {/* <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        THE BACKGROUND:
                    </Box> */}
                    <Box>{campaign.background1}</Box>
                </VStack>

                {/* Image 3 */}

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.side_view} />
                    <Box fontWeight={"semibold"} fontSize={"10px"}>{"Side view of the temple"}</Box>
                </Box>
                
                {/* The Vision */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        The Vision:
                    </Box>
                    <Box>{campaign.vision}</Box>
                </VStack>

                {/* About the temple complex */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        About the Temple Complex:
                    </Box>
                    <Box>{campaign.temple_complex}</Box>
                </VStack>

                {/* Footfall */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.footfall} />
                </Box>

                {/* Impact */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        The Impact:
                    </Box>
                    <Box>{campaign.impact}</Box>
                </VStack>

                {/* Procession image */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.impact_img} />
                </Box>

                {/* Need */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        The Need:
                    </Box>
                    <Box>{campaign.need}</Box>
                </VStack>

                {/* cost break up */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.cost_breakup} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        Your Contribution:
                    </Box>
                    <Box>{campaign.your_contrinution}</Box>

                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        How to Donate:
                    </Box>
                    <ul>
                        <li>Donations can be made online through the link</li>
                        <li>Donations via cheque can be made to ISKCON HUBLI and sent to P.B Road, Rayapur, Dharwad-580009.</li>
                    </ul>

                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        FAQs:
                    </Box>
                    <ul>
                        <li><b>How will I know how my funds are spent?</b><br/> After the funds are collected, updates will be provided on the campaign's progress.</li>
                        <li><b>When will I receive my receipt?</b><br/>For online donations through the link, you will receive the Receipt immediately. For the donations made through cheque, you will receive the receipt after the realization of the cheque.</li>
                    </ul>
                    <Box fontWeight={"bold"}>{campaign.join_us}</Box>
                    
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        Rewards for Donors:
                    </Box>
                    {/* wall of gratitude */}
                    <Box w={"90%"} h={"auto"} mx={"auto"}>
                        <Image w={"100%"} h={"100%"} src={campaign.image12} />
                    </Box>
                    {/* <ul>
                        <li><b>INR 10,000:</b> Name in the inaugural souvenir (4x font).</li>
                        <li><b>INR 25,000:</b> Name in the inaugural souvenir (1/6th page).</li>
                        <li><b>INR 50,000 and above:</b> ISKCON International Life Patronship Card, name in souvenir, and recognition on the Wall of Devotion</li>
                    </ul> */}
                </VStack>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        The ongoing work:
                    </Box>
                    <Box>{campaign.ongoing}</Box>
                </VStack>

                {/* Construction */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.construction_img} />
                </Box>
            </VStack>

            <VStack
                w={["95%", "95%", "80%", "40%"]}
                mx={"auto"}
                bgColor={"#EDEAEA"}
                py={"1rem"}
                px={"1.2rem"}
                my={"2rem"}
                borderRadius={"10px"}
                gap={"10px"}
            >
                <Box w={"100%"} fontWeight={"semibold"} fontSize={"1.5rem"}>
                    Recent Contributers
                </Box>
                {getSingleUser?.top10paymentDetails?.map((user, i) => (
                    <HStack
                        key={i + user?.amount}
                        bgGradient={IskconGradientLight}
                        borderRadius={"10px"}
                        w={"100%"}
                        py={"0.8rem"}
                        px={"0.6rem"}
                        gap={"1rem"}
                    >
                        <Box
                            borderRadius={"50%"}
                            bgColor={"white"}
                            w={"50px"}
                            h={"50px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            fontSize={"1.5rem"}
                            fontWeight={"bold"}
                        >
                            {user?.username[0]?.toUpperCase()}
                        </Box>
                        <VStack alignItems={"flex-start"} color={'#444444'} gap={".3rem"}>
                            <HStack>
                                <Box fontWeight={"bold"} >
                                    {user?.isanonymous ? 'Anonymous' : user?.username} donated {formatCurrency(user?.amount)}{" "}
                                </Box>
                            </HStack>
                            <Box fontWeight={"bold"} >
                                about {formatTimeAgo(user?.date)}
                            </Box>
                        </VStack>
                    </HStack>
                ))}
            </VStack>
        </HStack>
    );
};

export default CampaignMoreDetails;
