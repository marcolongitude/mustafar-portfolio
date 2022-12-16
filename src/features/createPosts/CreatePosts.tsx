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
    InputLeftAddon,
    Textarea,
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
import { selectUser } from '../../hooks/useUserState'
import { useSelector } from 'react-redux'

import jwt_decode from 'jwt-decode'
import { FaRegSave } from 'react-icons/fa'
import { FileUpload } from '../../components/form/fileUpload'


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

    const userTeste = useSelector(selectUser)
    console.log('***********************')
    console.log(userTeste)
    console.log('***********************')

    console.log(decoded.sid);

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    async function onSubmit(values: CreatePostRequest) {
        try {
            values.userId = decoded.sid
            const postCreated = await createPost(values).unwrap()
            console.log('post created => ', postCreated)
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
        <ContainerPage>
            <Flex justify='center' align='center' direction='column'>
                <TextHighlight description='Portfólio Criar Post para blog' query='Portfólio' />
                <form style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit(onSubmit)}>
                    <Flex w={{ base: '90%', md: '80%', lg: '65%' }} justify='center' align='center' direction='column' color='white'>
                        <FormControl >
                            <InputGroup display='flex' mb={5}>
                                <FileUpload />
                            </InputGroup>
                        </FormControl>

                        <FormControl isInvalid={errors.name ? true : false} >
                            <InputGroup display='flex' flexDirection='column' mb={5}>
                                <InputGroup>
                                    <InputLeftAddon color='teal.500' children='Título' />
                                    <Input
                                        {...register('name', {
                                            required: 'Campo obrigatório',
                                        })}
                                        color="teal.500"
                                        placeholder="Digite seu nome"
                                        _placeholder={{ opacity: 1, color: 'teal.500' }}
                                    />
                                </InputGroup>
                                <FormErrorMessage color='red.500'>
                                    {errors?.name && errors.name.message}
                                </FormErrorMessage>
                            </InputGroup>
                        </FormControl>


                        <FormControl isInvalid={errors.description ? true : false} >
                            <InputGroup display='flex' flexDirection='column' mb={5}>
                                <Textarea
                                    {...register('description', {
                                        required: 'Campo obrigatório',
                                    })}
                                    color="teal.500"
                                    rows={7}
                                    size='lg'
                                    pr="4.5rem"
                                    placeholder="Digite a descrição"
                                    _placeholder={{ opacity: 1, color: 'teal.500' }}
                                />
                                <FormErrorMessage color='red.500'>
                                    {errors?.description && errors.description.message}
                                </FormErrorMessage>
                            </InputGroup>
                        </FormControl>

                        <ButtonActionSuccess
                            colorButton='teal'
                            icon={<FaRegSave />}
                            typeAction="submit"
                            description="Salvar"
                            isLoading={isLoading}
                            action={undefined}
                        />
                    </Flex>
                </form>
            </Flex>
        </ContainerPage>
    )
}

export default CreatePosts  