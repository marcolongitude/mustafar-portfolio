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
  Flex,
  useColorModeValue
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
        _placeholder={{ opacity: 1, color: 'white' }}
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.65rem" size="sm" bg={'gray.600'} onClick={handleClick}>
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
          <InputGroup m={5}>
            <Input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Digite seu email"
              _placeholder={{ opacity: 1, color: 'white' }}
            />
          </InputGroup>

          <InputGroup mb={5}>
            <PasswordInput onChange={handleChange} name="password" />
          </InputGroup>

          <Button
            m={3}
            size='md'
            width='100%'
            onClick={submit}
            colorScheme="blue"
            isLoading={isLoading}
            rightIcon={<ArrowForwardIcon />}
          >
            Entrar
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Login
