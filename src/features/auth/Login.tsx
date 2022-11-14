import * as React from 'react'
import {
  FormErrorMessage,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  useToast,
  Highlight,
  Flex,
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useForm } from 'react-hook-form'

import { ButtonActionSuccess } from '../../components/button/ButtonActionSuccess'

import { useLoginMutation } from '../../app/services/auth'
import type { LoginRequest } from '../../app/services/auth'


type FormValues = {
  password: string;
  email: string;
};

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const [login, { isLoading }] = useLoginMutation()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  async function onSubmit(values: LoginRequest) {
    try {
      const user = await login(values).unwrap()
      dispatch(setCredentials(user))
      navigate('/counter')
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
    <Box width='100%' h='100vh' bg='gray.100' display='flex' justifyContent='center' alignItems='center'>
      <Box
        bg="blackAlpha.800"
        width='30%'
        minW='72'
        h='350px'
        borderRadius='15'
        display='flex'
        justifyContent='center'
      >
        <Flex justify='center' align='center' direction='column' color='white'>
          <Highlight
            query='DASHBOARD'
            styles={{
              px: '1',
              py: '1',
              bg: 'blackAlpha.600',
              color: 'white',
              borderRadius: 'md',
              paddingTop: '2',
              paddingRight: '4',
              paddingLeft: '4',
              paddingBottom: '2',
              mb: '4'
            }}
          >
            DASHBOARD Portfólio - Marco Aurélio
          </Highlight>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email ? true : false} >
              <InputGroup m={5}>
                <Input
                  {...register('email', {
                    required: 'Campo obrigatório',
                    pattern: { value: /^\S+@\S+$/i, message: "Digite um email válido" }
                  })}
                  type="required"
                  placeholder="Digite seu email"
                  _placeholder={{ opacity: 1, color: 'white' }}
                />
              </InputGroup>
              <FormErrorMessage color='white'>
                {errors?.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password ? true : false} >
              <InputGroup mb={5}>
                <Input
                  {...register('password', {
                    required: 'Campo obrigatório',
                    minLength: { value: 6, message: 'A senha deve ter no mínimo 6 caracteres' },
                  })}
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Digite a senha"
                  _placeholder={{ opacity: 1, color: 'white' }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.65rem" size="sm" bg={'gray.600'} onClick={handleClick}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
                <FormErrorMessage color='white'>
                  {errors?.password && errors.password.message}
                </FormErrorMessage>
              </InputGroup>
            </FormControl>
            <ButtonActionSuccess
              typeAction="submit"
              description="Entrar"
              isLoading={isLoading}
              action={undefined}
            />
          </form>
        </Flex>
      </Box>
    </Box>
  )
}

export default Login
