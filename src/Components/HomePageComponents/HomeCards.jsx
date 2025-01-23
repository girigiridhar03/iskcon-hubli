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
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";

const userImages = [
  {
    image:
      "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_71004.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "1,00,000",
    currentAmount: "70,000",
    days: "10",
    funders: "125",
    name: "SHASHIDHAR PATIL'S",
  },
  {
    image:
      "https://www.fueladream.com/public/project_assets/p71037/Lead_Image_Deepak_71037.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "5,00,000",
    currentAmount: "6,02,508",
    days: "0",
    funders: "121",
    name: "DEEPAK SHARMA'S",
  },
  {
    image:
      "https://www.fueladream.com/public/project_assets/p70241/Lead_Image_70241.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "2,50,000",
    currentAmount: "4,44,239",
    days: "0",
    funders: "178",
    name: "PRAVEEN KULKARNI'S ",
  },
  {
    image:
      "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_71042.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "2,00,000",
    currentAmount: "70,000",
    days: "10",
    funders: "43",
    name: "DR APARNA K'S",
  },
  {
    image:
      "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70206.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "3,00,000",
    currentAmount: "2,28,000",
    days: "10",
    funders: "51",
    name: "ANANTA RUPA DASA'S",
  },
  {
    image:
      "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70216.jpg",
    desc: "I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka.",
    goalAmount: "75,000",
    currentAmount: "69,072",
    days: "10",
    funders: "125",
    name: "SHASHIDHAR PATIL'S",
  },
];

const HomeCards = () => {
  return (
    <Box  w={['95%','90%','95%','95%','80%']} mt={'4rem'} border={'2px solid rgb(0,0,0,0.3)'} mx={'auto'} p={['0.3rem','0.5rem','1rem','1.5rem']} borderRadius={'5px'}>
       <Box   mx={'auto'}>
        <VStack alignItems={'flex-start'} gap={0}>
        <Box fontSize={'0.9rem'} fontWeight={'600'}>AMOUNT RAISED:</Box>
         <Box fontSize={'2.5rem'} fontWeight={'600'}>
         ₹65,82,721
         </Box>
        </VStack>

        <HStack fontWeight={'600'} fontSize={'1rem'}>
          <Box>CAMPAIGNS CREATED:</Box>
          <Box >164</Box>
        </HStack>
        
       </Box>
         <SimpleGrid
      columns={[1,1,2,2,3,4]}
      spacing={[10,10,5,10,5]}
      w={'100%'}
      mx={"auto"}
      mt={"2rem"}
      p={"10px"}
    >
      {userImages.map((user, i) => (
        <Card w={"100%"} overflow={"hidden"} key={i}>
          <Box w={"100%"} h={["250px","250px","250px",'300px','250px']}>
            <Image
              w={"100%"}
              h={"100%"}
              src={user.image}
              alt={user.name}
              objectFit={"cover"}
            />
          </Box>
          <CardBody px={"7px"}>
            <Box fontSize={"0.9rem"} fontWeight={"600"}>
              {user.name} CAMPAIGN TO BUILD A MAGNIFICENT SRI RADHA KRISHNA
              TEMPLE AND CULTURAL COMPLEX IN HUBLI-DHARWAD,KARNATAK.
            </Box>
            <Box fontSize={"0.8rem"}>{user.desc}</Box>
            <HStack fontSize={'0.7rem'} py={'0.5rem'}>
              <Box color={'red.500'}>ISKCON HUBLI-DHARWAD</Box> <Box>|</Box>
              <HStack>
                <Box color={'red.500'}>
                <FaLocationDot />
                </Box>
                <Box>
                  Hubli-Dharwad
                </Box>
              </HStack>
            </HStack>
          </CardBody>
          <CardFooter bgColor={'red.500'} display={'flex'} flexDirection={'column'} py={'5px'} px={'8px'}>
              <HStack color={"white"} fontWeight={'700'} justifyContent={'space-between'} w={'100%'}>
                 <Box>₹{user.currentAmount}</Box>
                 <Box>₹{user.goalAmount}</Box>
              </HStack>
              <ProgressBar currentAmount={user.currentAmount} goalAmount={user.goalAmount} />
              <HStack color={"white"} fontWeight={'700'} justifyContent={'space-between'} w={'100%'}>
                 <Box>
                  {user.funders}%
                 </Box>
                 <Box>
                  {user.days} LEFT
                 </Box>
              </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
       <Box mt={'2rem'}>
        <Box fontSize={'1rem'} fontWeight={'bold'}>
        CAMPAIGNS FOLLOWING:
        </Box>
        <Box fontSize={'1.2rem'}>
        ISKCON HUBLI-DHARWAD has not followed any campaign.
        </Box>
       </Box>
    </Box>
  );
};

export default HomeCards;
