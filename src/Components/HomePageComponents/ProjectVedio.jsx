import { AspectRatio, Box, Center } from '@chakra-ui/react';
import React from 'react';

const ProjectVedio = () => {
    return (
         <Box w={"90%"} h={"auto"} mx={"auto"} mb = {10}>
              <Center mt={6}>
                <AspectRatio ratio={16 / 9} w="100%">
                  <iframe
                    src="https://youtu.be/-AiBCuysKuE"
                    title="Construction Updates | Sri Radha Krishna Temple | ISKCON Hubli-Dharwad"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </Center>
               <Box fontWeight={"semibold"} fontStyle={"italic"}>
                Watch this video to get a better understanding of the ongoing
                project.
              </Box>
            </Box>
    );
};

export default ProjectVedio;