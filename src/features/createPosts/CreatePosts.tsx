import { useCreatePostMutation } from '../../app/services/posts'
import type { CreatePostRequest } from '../../app/interfaces/postsInterfaces'
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
    useToast,
    Flex,
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { ButtonActionSuccess } from '../../components/button'
import { isoToDateComplete } from '../../utils/functionsDate'
import { limitText } from '../../utils/functionsText'
import { ErrorNotPermission } from '../../components/errorNotPermission'
import { ErrorGeneric } from '../../components/errorGeneric'
import { Loading } from '../../components/loading'
import { ContainerPage } from '../../components/containerPage'
import { useForm } from 'react-hook-form'
import TextHighlight from '../../components/textHyghlight/TextHighlight'

import jwt_decode from 'jwt-decode'

type FormValues = {
    name: string;
    description: string;
    userId: string;
};

export const CreatePosts = () => {
    const toast = useToast()
    const [createPost, { isLoading }] = useCreatePostMutation()

    const token: string | null = localStorage.getItem('token')
    let decoded: any = ""
    if (token) {
        decoded = jwt_decode(token);
    }

    console.log(decoded.sid);

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    async function onSubmit(values: CreatePostRequest) {
        try {
            values.userId = decoded.sid
            const postCreated = await createPost(values).unwrap()
            // console.log('post created => ', postCreated)
        } catch (err) {
            toast({
                status: 'error',
                title: 'Erro',
                description: 'Houve um problema, entre em contato com o administrador!',
                isClosable: true,
            })
        }
    }


    return (
        <Box
            width='100%'
            h='100vh'
            bg='gray.100'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgGradient={[
                'linear(to-tr, teal.500, yellow.300)',
                'linear(to-t, blue.500, teal.500)',
                'linear(to-b, orange.100, purple.600)',
            ]}
        >
            <Box
                p='5'
                bg="blackAlpha.800"
                width='30%'
                minW='72'
                h='350px'
                borderRadius='15'
                display='flex'
                justifyContent='center'
            >
                <Flex justify='center' align='center' direction='column' color='white'>
                    <TextHighlight description='Criar Post - Marco Aurélio' query='Marco Aurélio' />
                    <form style={{ marginTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                        <Flex justify='center' align='center' direction='column' color='white'>
                            <FormControl isInvalid={errors.name ? true : false} >
                                <InputGroup display='flex' flexDirection='column' mb={5}>
                                    <Input
                                        {...register('name', {
                                            required: 'Campo obrigatório',
                                        })}
                                        type="required"
                                        placeholder="Digite seu nome"
                                        _placeholder={{ opacity: 1, color: 'white' }}
                                    />
                                    <FormErrorMessage color='red.500'>
                                        {errors?.name && errors.name.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </FormControl>

                            <FormControl isInvalid={errors.description ? true : false} >
                                <InputGroup display='flex' flexDirection='column' mb={5}>
                                    <Input
                                        {...register('description', {
                                            required: 'Campo obrigatório',
                                        })}
                                        pr="4.5rem"
                                        placeholder="Digite a descrição"
                                        _placeholder={{ opacity: 1, color: 'white' }}
                                    />
                                    <FormErrorMessage color='red.500'>
                                        {errors?.description && errors.description.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </FormControl>

                            <ButtonActionSuccess
                                colorButton='blue'
                                icon={<ArrowForwardIcon />}
                                typeAction="submit"
                                description="Salvar"
                                isLoading={isLoading}
                                action={undefined}
                            />
                        </Flex>
                    </form>
                </Flex>
            </Box>
        </Box>
    )
}

export default CreatePosts  