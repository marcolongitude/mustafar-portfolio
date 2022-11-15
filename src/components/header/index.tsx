import React, { FC } from "react";
import {
  Box,
  Heading,
  Flex,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SideBar } from "../menuSideBar";

interface Props {}

export const Header: FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

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
        >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="sm" letterSpacing={"tighter"}>
            Marco Aurélio - Portfólio
            </Heading>
        </Flex>

        <Box display={{ base: "block" }} onClick={handleToggle}>
            <HamburgerIcon />
        </Box>
        </Flex>
        <SideBar isOpenMenu={isOpen} onCloseMenu={onClose} />
    </>
  );
};

