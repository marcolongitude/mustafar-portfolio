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
    Divider,
    ButtonGroup,
    Flex
} from '@chakra-ui/react'
import { selectUser } from '../../hooks/useUserState'
import { ContainerPage } from '../../components/containerPage'
import { isoToDateComplete } from '../../utils/functionsDate'
import { Loading } from '../../components/loading'
import { errorQuery } from '../../app/services/posts'
import { ErrorNotPermission } from '../../components/errorNotPermission'
import { ErrorGeneric } from '../../components/errorGeneric'
import { ReactElement } from 'react'
import { TextSpaceAround } from '../../components/textSpaceAround'
import { formatCel } from '../../utils/functionsText'
import { ButtonActionSuccess } from '../../components/button'
import { ArrowForwardIcon, UnlockIcon } from '@chakra-ui/icons'

export const User = (): ReactElement => {
    const token = localStorage.getItem('token')
    const userToken: tokenProps = parseJwt(token)
    const { data: user, isLoading, isError, error, } = useGetUserQuery(userToken.sid)
    const ERROR = error as errorQuery

    if (!user && isLoading) return <Loading />

    return (
        <ContainerPage >
            <>
                <Card align='center'>
                    <CardHeader>
                        <Heading size='md'>Detalhes do Usuário</Heading>
                    </CardHeader>
                    <CardBody w='100%'>
                        <Stack spacing='2'>
                            <TextSpaceAround
                                title='Nome: '
                                description={user?.name}
                            />
                            <TextSpaceAround
                                title='Celular: '
                                description={formatCel(user?.cel)}
                            />
                            <TextSpaceAround
                                title='Email: '
                                description={user?.email}
                            />
                            <TextSpaceAround
                                title='Permissão: '
                                description={user?.permission}
                            />
                        </Stack>
                    </CardBody>
                    <CardFooter w='100%' justifyContent='space-between' alignItems="center" flexWrap='wrap'>
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            <Text fontSize='md' noOfLines={1}>
                                <Text as='b'>Criado em: </Text> 
                                {isoToDateComplete(user?.createAt as string)}
                            </Text>
                        </Box>
                        <ButtonGroup spacing='2'>
                            <ButtonActionSuccess
                                colorButton='teal'
                                icon={<UnlockIcon />}
                                typeAction="button"
                                description="Mudar a senha"
                                isLoading={isLoading}
                                action={undefined}
                                variantOption="ghost"
                            />
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                {isError && ERROR.status === 401 &&
                    <ErrorNotPermission />
                }
                {isError && ERROR.status !== 401 &&
                    <ErrorGeneric />
                }
            </>
        </ContainerPage>
    )
}

export default User  