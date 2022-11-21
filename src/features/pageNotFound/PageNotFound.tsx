import { Flex, Heading } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import AnimationNotFound from '../../animations/404-error-doodle-animation.json'

const PageNotFount = () => {
    return (
        <Flex
            h="calc(100vh - 72px)"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Heading textAlign="center" mb="20">Erro: Página não encontrada!</Heading>
            <Player
                loop
                src={AnimationNotFound}
                autoplay
                style={{ width: 300, height: 300 }}
            />
        </Flex>
    )
}

export { PageNotFount }