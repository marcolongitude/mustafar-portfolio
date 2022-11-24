import { Flex, Heading } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import AnimationErrorGeneric from '../../animations/error.json'

const ErrorGeneric = () => {
    return (
        <Flex
            h="calc(100vh - 72px)"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Heading textAlign="center" mb="20">Erro: Desculpe, ouve algo não esperado!</Heading>
            <Player
                loop
                src={AnimationErrorGeneric}
                autoplay
                style={{ width: 300, height: 300 }}
            />
        </Flex>
    )
}

export { ErrorGeneric }