import * as React from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Center,
  Box,
  useToast,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'

import { useLoginMutation } from '../../app/services/auth'
import type { LoginRequest } from '../../app/services/auth'

function PasswordInput({
  name,
  onChange,
}: {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Esconder' : 'Mostrar'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  const [formState, setFormState] = React.useState<LoginRequest>({
    email: '',
    password: '',
  })

  const [login, { isLoading }] = useLoginMutation()

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  const submit = async () => {
    try {
      console.log('00000000000000000000')
      const user = await login(formState).unwrap()
      console.log('111111111111111111111')
      console.log('user => ', user)
      dispatch(setCredentials(user))
      navigate('/counter')
    } catch (err) {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxx')
      console.log(err)
      console.log('xxxxxxxxxxxxxxxxxxxxxxxx')
      toast({
        status: 'error',
        title: 'Error',
        description: 'Oh no, there was an error!',
        isClosable: true,
      })
    }
  }

  return (
    <Center h="500px">
      <VStack spacing="4">
        <Box>DASHBOARD - Portfólio - Marco Aurélio</Box>
        <InputGroup>
          <Input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Digite a senha"
          />
        </InputGroup>

        <InputGroup>
          <PasswordInput onChange={handleChange} name="password" />
        </InputGroup>
        <Button
          size='md'
          width='100%'
          onClick={submit}
          colorScheme="green"
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </VStack>
    </Center>
  )
}

export default Login
