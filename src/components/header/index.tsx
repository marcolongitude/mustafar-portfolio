import React, { FC } from "react";
import {
  Box,
  Heading,
  Flex,
  useDisclosure,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { SideBar } from "../menuSideBar";

interface Props { }

export const Header: FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        color="white"
        w="100%"
      >
        <Box alignItems="center" mr={5}>
          <Heading as="h1" size="sm" letterSpacing={"tighter"}>
            Marco Aurélio - Portfólio
          </Heading>
        </Box>

        <Box display={{ base: "block" }} >
          <span onClick={toggleColorMode} >{colorMode === 'light' ? 'Dark' : 'Light'} <SunIcon marginRight="3" /> </span>
          <HamburgerIcon onClick={handleToggle} />
        </Box>
      </Flex>
      <SideBar isOpenMenu={isOpen} onCloseMenu={onClose} />
    </>
  );
};

