import { useGetUserQuery } from '../../app/services/user'
import { parseJwt, tokenProps } from '../../utils/functionTokenParse'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Box,
    Heading,
    Stack,
    StackDivider,
    SimpleGrid,
    ButtonGroup,
} from '@chakra-ui/react'
import { selectUser } from '../../hooks/useUserState'

export const User = () => {
    const token = localStorage.getItem('token')
    const userToken: tokenProps = parseJwt(token)
    const { data: user, isLoading, isError, error, } = useGetUserQuery(userToken.sid)
    const ERROR = error

    return (
        <Box h="calc(100vh - 72px)" p='8'>
            <Text>teste user</Text>
        </Box>
    )
}

export default User  