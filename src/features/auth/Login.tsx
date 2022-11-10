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
  Highlight,
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon, ArrowForwardIcon } from '@chakra-ui/icons'

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
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const [login, { isLoading }] = useLoginMutation()

  const [formState, setFormState] = React.useState<LoginRequest>({
    email: '',
    password: '',
  })

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  const submit = async () => {
    try {
      const user = await login(formState).unwrap()
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
    <Center h="500px">
      <VStack spacing="4">
        <Highlight query='DASHBOARD' styles={{ px: '1', py: '1', bg: 'gray.100', borderRadius: 'md', paddingTop: '2', paddingRight: '4', paddingLeft: '4', paddingBottom: '2' }}  >
          DASHBOARD Portfólio - Marco Aurélio
        </Highlight>
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
          colorScheme="blue"
          isLoading={isLoading}
          rightIcon={<ArrowForwardIcon />}
        >
          Entrar
        </Button>
      </VStack>
    </Center>
  )
}

export default Login
