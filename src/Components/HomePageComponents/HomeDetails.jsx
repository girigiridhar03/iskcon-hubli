import { Box, HStack, Table, Tbody, Td, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeDetails = () => {
  return (
    <Box w={['95%','90%','95%','95%','80%']} mx={"auto"} display={"flex"} mt={"2rem"} gap={"1.5rem"} flexDirection={['column','column','column','row']}>
      <VStack
        w={['100%','100%','100%','50%']}
        alignItems={"left"}
        p={5}
        border={"2px solid rgb(0,0,0,0.2)"}
        borderRadius={"5px"}
      >
        <Box textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>
          ORGANIZATION DETAILS
        </Box>
        <Table w={"100%"}>
          <Tr>
            <Td fontWeight={"bold"}>Address:</Td>
            <Td>
              ISKCON Sri Sri Krishna Balarama Temple, Hubballi-Dharwad Road,
              Rayapur, Dharwad 580009, Karnataka, India
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Location:</Td>
            <Td>Hubli-Dharwar, Karnataka, India</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>About the org:</Td>
            <Td>
              The International Society for Krishna Consciousness, abbreviated
              as ISKCON, known colloquially as the Movement of Hare Krishna, is
              a Gaudiya Vaishnava Hindu religious organization.
            </Td>
          </Tr>
        </Table>
      </VStack>
      <VStack
        w={['100%','100%','100%','50%']}
        alignItems={"left"}
        p={5}
        border={"2px solid rgb(0,0,0,0.2)"}
        borderRadius={"5px"}
      >
        <Box textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>
          LINKS
        </Box>
        <Table w="100%">
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Social Profile:</Td>
              <Td>
                <a
                  href="https://www.facebook.com/iskconhubli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare
                    style={{ color: "blue", fontSize: "2rem" }}
                  />
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Certificates:</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Website:</Td>
              <Td>
                <a
                  href="https://www.iskconhubli.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  iskconhubli.org
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">YouTube:</Td>
              <Td>
                <a
                  href="https://www.youtube.com/watch?v=NNu_TkGy-BU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  ISKCON HUBLI-DHARWAD VIDEOS
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default HomeDetails;
