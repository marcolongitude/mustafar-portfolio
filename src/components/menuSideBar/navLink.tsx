import { Flex, Icon, Text, Box, Link } from "@chakra-ui/react";

interface Props {
    link: {
        label: string
        navigation: any
        icon: any
    }
}

export function NavLink({ link, ...rest }: Props) {

    return (
        <Box>
            <Link _hover={{ textDecoration: 'none' }} onClick={link.navigation}>
                <Flex
                    h='50px'
                    align="center"
                    justify="space-between"
                    p="4"
                    mx="4"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"

                    _hover={{
                        bg: "teal.500",
                        color: "white",
                        textDecoration: 'none'
                    }}
                    {...rest}
                >
                    <Text fontSize="1.2rem">{link.label}</Text>
                    {link.icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: "white",
                            }}
                            as={link.icon}
                        />
                    )}
                </Flex>
            </Link>
        </Box>
    );
}