import React, { FC } from 'react'
import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    DrawerFooter,
    LinkBox,
    StackDivider,
    VStack,
    Box,
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'

import { ButtonActionSuccess } from '../button'
import Avatar from '../avatar'



interface SidebarProps {
}

export const SideBar: FC<SidebarProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const Logout = () => {
        dispatch(logout())
        navigate('/login')
    }


    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mb='10' display='flex' alignItems='center' justifyContent='center'>
                        <Avatar />
                    </DrawerHeader>

                    <DrawerBody alignItems='center' justifyContent='center'>
                        <VStack
                            divider={<StackDivider borderColor='gray.600' />}
                            spacing={4}
                            align='stretch'
                        >
                            <Box h='20px'>
                                Home
                            </Box>
                            <Box h='20px'>
                                Lista Posts
                            </Box>
                            <Box h='20px'>
                                Criar Post
                            </Box>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <ButtonActionSuccess colorButton='teal' icon={<ExternalLinkIcon />} isLoading={false} typeAction='button' description='Sair' action={Logout} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
