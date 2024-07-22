import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="50px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Nav;
