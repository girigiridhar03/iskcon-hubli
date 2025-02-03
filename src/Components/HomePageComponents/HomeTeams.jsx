import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const images = [
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70204.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70204.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70204.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70210.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70211.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70212.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70212.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70214.jpg",
  "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Lead_image_70216.jpg",
];

const HomeTeams = () => {
  return (
    <Box
      border={"2px solid rgb(0,0,0,0.3)"}
      p={["0.4rem", "0.5rem", "1rem", "1.5rem"]}
      borderRadius={"5px"}
      w={"100%"}
    >
      <Box fontSize={'1.5rem'} fontWeight={'bold'}>TEAM MEMBERS</Box>

      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={[2]} py={'1rem'}>
        {images.map((image, index) => (
          <Box
            key={index}
            w={['100px', '110px']}
            h={['100px', '110px']}
            overflow="hidden"
            borderRadius="50%"
            border="2px solid lightgray" // Optional for a border
            boxShadow="md" // Optional for a subtle shadow
          >
            <Image
              w="100%"
              h="100%"
              src={image}
              alt={`Image ${index + 1}`} // Accessibility improvement
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomeTeams;
