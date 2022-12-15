import {
    Wrap,
    WrapItem,
    Avatar,
    Button
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

interface NavigateLinkProps {
    route: string
}

export function AvatarUser() {
    const navigate = useNavigate()
    const NAVIGATE_USER_DETAILS: string = '/users/details'
    const navigateLink = ({ route }: NavigateLinkProps): void => {
        navigate(route)
    }

    return (
        <Wrap>
            <WrapItem flexDirection='column' alignItems='center'>
                <Avatar mb={5} size='2xl' name='Marco Aurélio' src='' />
                <Button
                    onClick={() => navigateLink({ route: NAVIGATE_USER_DETAILS })}
                    colorScheme='teal'
                    variant='outline'
                    rightIcon={<ArrowForwardIcon />}>{' Detalhes '}
                </Button>
            </WrapItem>
        </Wrap>
    )
}
