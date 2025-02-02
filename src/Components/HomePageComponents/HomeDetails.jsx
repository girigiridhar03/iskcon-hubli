import { Box, Table, Tbody, Td, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import cor from '../../assets/pdfFiles/CertificateofRegistration.pdf'
import csr from '../../assets/pdfFiles/ISKCON_CSR.pdf';
import g from '../../assets/pdfFiles/80G.pdf';
const HomeDetails = () => {
  return (
    <Box
      w={["95%", "90%", "95%", "95%", "80%"]}
      mx={"auto"}
      display={"flex"}
      mt={"2rem"}
      gap={"1.5rem"}
      flexDirection={["column", "column", "column", "row"]}
    >
      <VStack
        w={'100%'}
        alignItems={"left"}
        p={5}
        border={"2px solid rgb(0,0,0,0.2)"}
        borderRadius={"5px"}
      >
        <Box textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>
          ORGANIZATION DETAILS
        </Box>
        <Table w={"100%"}>
          <Tbody>
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
                as ISKCON, known colloquially as the Movement of Hare Krishna,
                is a Gaudiya Vaishnava Hindu religious organization.
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Certificates:</Td>
              <Td>
                <VStack alignItems={'flex-start'}>
                <a href={cor} target="_blank" rel="noopener noreferrer"  style={{ color: "blue", textDecoration: "underline" }}>
                  Certificate of Registration
                </a>
                <a href={csr} target="_blank" rel="noopener noreferrer"  style={{ color: "blue", textDecoration: "underline" }}>
                  ISKCON CSR
                </a>
                <a href={g} target="_blank" rel="noopener noreferrer"  style={{ color: "blue", textDecoration: "underline" }}>
                  80G Certificate
                </a>
                </VStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default HomeDetails;
