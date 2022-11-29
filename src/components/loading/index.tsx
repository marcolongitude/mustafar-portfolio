import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex 
        h="calc(100vh - 72px)" 
        w='100%'
        justifyContent='center'
        alignItems="center"
    >
        <Spinner size='xl' />
    </Flex>
  )
}
