import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const PhotoWithDescription = ({ imageError, avatar, getSingleUser, handleImageError }) => {
    return (
        <Box w={["97%", "97%", "97%", "50%"]} mx={"auto"}>
            <Box
                w="100%"
                h={["400px", "450px", "400px", "400px", "500px"]}
                overflow="hidden"
            >
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={imageError ? avatar : getSingleUser?.campaignDetails?.imgurl}
                    onError={handleImageError}
                />
            </Box>
            <Box
                bgColor="#EDEAEA"
                mt="1rem"
                p="1rem"
                fontSize="1.3rem"
                fontWeight="semibold"
            >
                I am a concerned citizen and this campaign of mine aims to support
                the creation of a magnificent ISKCON Sri Radha Krishna Temple and
                Cultural complex in Hubli-Dharwad area of Karnataka.
            </Box>
        </Box>
    );
};

export default PhotoWithDescription;