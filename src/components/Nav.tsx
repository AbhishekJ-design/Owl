import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";




const Nav = () => {
    return ( 
    <HStack> 

        <Image src={logo} boxSize= '50px' /> 
        <ColorModeSwitch />

    </HStack>
)}

export default Nav;