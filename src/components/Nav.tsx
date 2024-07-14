import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"

const Nav = () => {
    return ( <HStack> 
        <Image src={logo} boxSize= '50px' /> 
        <Text>Nav Bar</Text>
    </HStack>
)}

export default Nav;