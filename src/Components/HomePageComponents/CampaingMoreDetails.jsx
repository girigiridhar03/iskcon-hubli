import { AspectRatio, Box, Center, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { formatCurrency, formatTimeAgo } from '../utils';

const CampaignMoreDetails = ({ campaign, getSingleUser, themeColor,  handleImageError, avatar, imageError }) => {
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
                    <Image w={"100%"} h={"100%"} src={campaign.image1} />
                </Box>
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image2} />
                </Box>

                {/* The Context */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        THE CONTEXT:
                    </Box>
                    <Box>{campaign.context}</Box>
                </VStack>

                {/* The Background */}

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        THE BACKGROUND:
                    </Box>
                    <Box>{campaign.background}</Box>
                    <Box>{campaign.background1}</Box>
                    <Box fontWeight={"semibold"}>{campaign.background2}</Box>
                </VStack>

                {/* Image 3 */}

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image3} />
                </Box>

                {/* Image Three Matter */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box fontStyle={"italic"}>{campaign.image3Matter}</Box>
                </VStack>

                {/* Image 4 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image4} />
                </Box>

                {/* Image four Matter */}
                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box>{campaign.image4Para1}</Box>
                    <Box fontWeight={"semibold"}>{campaign.image4Heading}</Box>
                    <Box>{campaign.image4para2}</Box>
                </VStack>

                {/* Image 5 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image5} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box>{campaign.image5Para}</Box>
                </VStack>

                {/* Youtube Vide */}

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Center mt={6}>
                        <AspectRatio ratio={16 / 9} w="100%">
                            <iframe
                                src="https://www.youtube.com/embed/NNu_TkGy-BU"
                                title="Construction Updates | Sri Radha Krishna Temple | ISKCON Hubli-Dharwad"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </AspectRatio>
                    </Center>
                </Box>

                {/* Heading */}

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box fontWeight={"semibold"} fontStyle={"italic"}>
                        Watch this video to get a better understanding of the ongoing
                        project.
                    </Box>

                    {/* THE INITIATIVE */}
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        THE INITIATIVE:
                    </Box>
                    <Box>{campaign.initiative}</Box>
                    <Box>{campaign.initiative1}</Box>
                    <Box fontWeight={"semibold"}>{campaign.initiativeBold}</Box>
                </VStack>

                {/* image 6 */}

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image6} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box fontStyle={"italic"}>{campaign.image6para1}</Box>

                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        {campaign.templeComplex}
                    </Box>

                    <Box>{campaign.templeComplexMatter}</Box>
                </VStack>

                {/* image 7 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image7} />
                </Box>

                {/* image 8 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image8} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box fontStyle={"italic"}>{campaign.image8Heading}</Box>

                    <Box>{campaign.image8Para}</Box>
                </VStack>

                {/* Pictures of Radha Krishna */}

                <Box
                    w={"90%"}
                    h={"auto"}
                    mx={"auto"}
                    fontSize={"1.5rem"}
                    fontWeight={"bold"}
                    color={"blue.500"}
                >
                    {campaign.radhaKrishnaHeading}
                </Box>

                {/* image 9 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image9} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box>{campaign.image9Para}</Box>
                </VStack>

                {/* image 10 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image10} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box>{campaign.image10Para}</Box>
                </VStack>

                {/* Heading */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    color={"red.500"}
                    w={"90%"}
                    mx={"auto"}
                >
                    PROJECT STATUS:
                </Box>

                {/* image Project */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.projectStatus} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box fontStyle={"italic"}>{campaign.projectMatter}</Box>
                    <Box>{campaign.projectMatter1}</Box>
                </VStack>

                {/* image 11 */}
                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image11} />
                </Box>

                <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
                    <Box
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"red.500"}
                    >
                        {campaign.gratitude}
                    </Box>
                </VStack>

                {/* image 12 */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    mx={"auto"}
                >
                    READ MORE ABOUT THE WALL OF GRATITUDE BELOW :
                </Box>

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.image12} />
                </Box>

                {/* About Me */}

                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    color={"red.500"}
                    mx={"auto"}
                >
                    ABOUT ME:
                </Box>

                <Box
                    w={"90%"}
                    h={["400px", "450px", "400px", "400px", "500px"]}
                    overflow="hidden"
                    mx={"auto"}
                >
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={
                            imageError ? avatar : getSingleUser?.campaignDetails?.imgurl
                        }
                        onError={handleImageError}
                    />
                </Box>

                <VStack w={"90%"} mx={"auto"}>
                    <Box>
                        My name is {getSingleUser?.campaignDetails?.campaignName}. I am
                        a concerned citizen. This campaign of mine aims to support the
                        construction of this magnificent Sri Radha Krishna Temple and
                        Cultural Complex in Hubli- Dharwad, Karnataka.
                    </Box>
                    <Box>
                        I came forward to support the vision of the temple as it will
                        impact millions of people. Just in the first 10 years, it is
                        estimated to have 2 crore ( 200 lakh) visitors. I am thrilled
                        that I have this opportunity to raise funds for a cause with a
                        greater purpose. I firmly believe that if we all come together
                        and do our little bit we would create something that will be
                        remembered for generations.
                    </Box>
                    <Box>
                        The total funds required to complete Phase 1 of the Sri Radha
                        Krishna Temple and Cultural Complex in Hubli-Dharwad, Karnataka
                        is huge. So please fund generously. Any amount big or small will
                        be needed to make this dream come true. Together, let us create
                        a sanctuary of solace and unity, a place where the spirit soars
                        and where generations of people will come and find inspiration
                        and peace.
                    </Box>
                </VStack>

                {/* About Iskcon  */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    color={"red.500"}
                    mx={"auto"}
                >
                    ABOUT ISKCON:
                </Box>

                <Box w={"90%"} h={"auto"} mx={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign.iskconIcon} />
                </Box>

                <Box w={"90%"} mx={"auto"}>
                    ISKCON stands for International Society for Krishna Consciousness.
                    Srila Prabhupada who went to the United States of America in the
                    year 1966 to spread the message of Krishna and engage people in
                    the practice of the yuga-dharma (chanting of the holy names of
                    Krishna) established this society in 1966. Srila Prabhupada
                    incorporated this society with the vision of developing it into a
                    worldwide organization. Today ISKCON comprises hundreds of
                    temples, many rural communities, and hundreds of vegetarian
                    restaurants.
                </Box>

                <VStack alignItems={"flex-start"} w={"90%"} mx={"auto"}>
                    <Box>Seven purposes of ISKCON</Box>
                    <ol>
                        <li>Spread spiritual knowledge for unity and peace.</li>
                        <li>Promote the consciousness of Krishna.</li>
                        <li>Foster unity with Krishna as the core.</li>
                        <li>Encourage congregational chanting.</li>
                        <li>Establish a holy place for Krishna's pastimes.</li>
                        <li>Teach a simpler, natural way of life.</li>
                        <li>Publish and distribute spiritual literature.</li>
                    </ol>
                    {/* Iskcon 2 */}
                    <Box w={"50%"} h={"auto"}>
                        <Image w={"100%"} h={"100%"} src={campaign?.iskconIcon2} />
                    </Box>
                </VStack>

                <VStack alignItems={"flex-start"} w={"90%"} mx={"auto"}>
                    <Box fontWeight={"semibold"}>ISKCON-Hubli-Dharwad - History</Box>
                    <Box>
                        2005: ISKCON Was allotted 8.5 Acre of Land by Govt. Of
                        Karnataka.
                    </Box>
                    <Box>
                        2006: Sri Sri Krishna Balaram makeshift Temple was built.
                    </Box>
                    <Box>2011: Bhoomi Puja was performed for the new project.</Box>
                    <Box>2013: Shilanyasa performed for the new project.</Box>
                </VStack>

                {/* About Iskcon  */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    color={"red.500"}
                    mx={"auto"}
                >
                    FESTIVALS HELD AT THE CURRENT MAKESHIFT TEMPLE OF SRI SRI KRISHNA
                    BALARAM
                </Box>

                {/* image 13 */}

                <Box w={"90%"} mx={"auto"} h={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign?.image13} />
                </Box>

                {/* Map And Location  */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    color={"red.500"}
                    mx={"auto"}
                >
                    MAP AND LOCATION:
                </Box>

                {/* image 14 */}

                <Box w={"90%"} mx={"auto"} h={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign?.image14} />
                </Box>
                {/* TAX BENEFITS: */}
                <Box
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    w={"90%"}
                    color={"red.500"}
                    mx={"auto"}
                >
                    TAX BENEFITS:
                </Box>

                {/* image 14 */}

                <Box w={"90%"} mx={"auto"} h={"auto"}>
                    <Image w={"100%"} h={"100%"} src={campaign?.taxBenfits} />
                </Box>

                <Box w={"90%"} mx={"auto"}>
                    Funding for this campaign is eligible for tax breaks as the ISKCON
                    Hubli-Dharwad is a registered Trust and you can avail of benefits
                    under section 80G of the IT Act. Foreign funding is not accepted.
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
                        bgColor={themeColor}
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
                        <VStack alignItems={"flex-start"} gap={".3rem"}>
                            <HStack>
                                <Box fontWeight={"bold"} color={"white"}>
                                    {user?.username} donated {formatCurrency(user?.amount)}{" "}
                                </Box>
                            </HStack>
                            <Box fontWeight={"bold"} color={"white"}>
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
