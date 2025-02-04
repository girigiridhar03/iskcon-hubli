import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { formatCurrency } from '../utils';

const Funders = ({ getSingleUser }) => {
    return (
         <Box w={"95%"} maxW={"1200px"} mx={"auto"}>
          {getSingleUser?.userList?.length > 0 ? (
            getSingleUser?.userList?.map((funder) => (
              <HStack
                key={funder.id}
                borderBottom={"2px dotted red"}
                py={"2rem"}
                gap={"1rem"}
              >
                <Box
                  w={"50px"}
                  h={"50px"}
                  overflow={"hidden"}
                  borderRadius={"50%"}
                >
                  <Image
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    src="https://fadcdn.s3.amazonaws.com/defaults/default.png"
                  />
                </Box>
                <VStack
                  alignItems={["center"]}
                  flexDirection={["row"]}
                  w={"100%"}
                  justifyContent={"space-between"}
                >
                  <Box
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                    whiteSpace={"normal"}
                    overflowWrap={"break-word"}
                    wordBreak={"break-word"}
                    w={'70%'}
                  >
                    {funder?.username}
                  </Box>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    {formatCurrency(funder?.amount)}
                  </Box>
                </VStack>
              </HStack>
            ))
          ) : (
            <Box
              textAlign={"center"}
              w={"100%"}
              fontWeight={"bold"}
              fontSize={"1.1rem"}
              color={"red.500"}
            >
              No Funders Found
            </Box>
          )}
        </Box>
    );
};

export default Funders;