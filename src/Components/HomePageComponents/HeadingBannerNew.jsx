import { Flex, Image, } from "@chakra-ui/react";
import logo from "../../assets/images/banner.png";


const HeadingBanner = () => {

    return (
        <Flex
            maxW="1200px"
            mx="auto"
            justifyContent='space-between'
            align="center"
            bg="gray.100" h={["73px", "25%", "200px"]}
            marginBottom='10px'
        >
            <Image
                src={logo} 
                alt="Left Banner"
            />
        </Flex>)


};

export default HeadingBanner;

