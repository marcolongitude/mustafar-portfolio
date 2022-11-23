import { Flex, Heading } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import AnimationNotPermission from '../../animations/error-401.json'

const ErrorNotPermission = () => {
    return (
        <Flex
            h="calc(100vh - 72px)"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Heading textAlign="center" mb="20">Erro: Você não tem permissão para acessar essa página!</Heading>
            <Player
                loop
                src={AnimationNotPermission}
                autoplay
                style={{ width: 300, height: 300 }}
            />
        </Flex>
    )
}

export { ErrorNotPermission }