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
  Flex,
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useForm } from 'react-hook-form'

import { ButtonActionSuccess } from '../../components/button/ButtonActionSuccess'

import { useLoginMutation } from '../../app/services/auth'
import type { LoginRequest } from '../../app/services/auth'

import { useAuth } from '../../hooks/useAuth'

import TextHighlight from '../../components/textHyghlight/TextHighlight'


type FormValues = {
  password: string;
  email: string;
};

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const [isUserLogged] = React.useState(useAuth());
  const [login, { isLoading }] = useLoginMutation()
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    if (isUserLogged.token) {
      navigate('/counter')
    }
  })

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
          <TextHighlight description='DASHBOARD Portf??lio - Marco Aur??lio' query='DASHBOARD' />
          <form style={{ marginTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
            <Flex justify='center' align='center' direction='column' color='white'>
              <FormControl isInvalid={errors.email ? true : false} >
                <InputGroup display='flex' flexDirection='column' mb={5}>
                  <Input
                    {...register('email', {
                      required: 'Campo obrigat??rio',
                      pattern: { value: /^\S+@\S+$/i, message: "Digite um email v??lido" }
                    })}
                    type="required"
                    placeholder="Digite seu email"
                    _placeholder={{ opacity: 1, color: 'white' }}
                  />
                  <FormErrorMessage color='red.500'>
                    {errors?.email && errors.email.message}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={errors.password ? true : false} >
                <InputGroup display='flex' flexDirection='column' mb={5}>
                  <Input
                    {...register('password', {
                      required: 'Campo obrigat??rio',
                      minLength: { value: 6, message: 'A senha deve ter no m??nimo 6 caracteres' },
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
                  <FormErrorMessage color='red.500'>
                    {errors?.password && errors.password.message}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>

              <ButtonActionSuccess
                colorButton='blue'
                icon={<ArrowForwardIcon />}
                typeAction="submit"
                description="Entrar"
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

export default Login
