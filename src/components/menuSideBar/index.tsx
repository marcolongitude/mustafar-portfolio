import React, { FC } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    VStack,
    Box,
    Button
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'

import { ButtonActionSuccess } from '../button'
import Avatar from '../avatar'


interface SidebarProps {
    isOpenMenu: boolean
    onCloseMenu: any
}

export const SideBar: FC<SidebarProps> = ({ isOpenMenu, onCloseMenu }: SidebarProps) => {
    const btnRef = React.useRef<any>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const NAVIGATE_USER_DETAILS: string = '/users/details'
    const NAVIGATE_POSTS: string = '/posts'
    const NAVIGATE_POSTS_CREATE: string = '/posts/create'

    const Logout = () => {
        dispatch(logout())
        navigate('/login')
    }

    interface NavigateLinkProps {
        route: string
    }
    const navigateLink = ({ route }: NavigateLinkProps): void => {
        navigate(route)
    }


    return (
        <>
            <Drawer
                isOpen={isOpenMenu}
                placement='right'
                onClose={onCloseMenu}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mb='10' display='flex' alignItems='center' justifyContent='center'>
                        <Avatar
                            onNavigate={() => navigateLink({ route: NAVIGATE_USER_DETAILS })}
                        />
                    </DrawerHeader>
                    <DrawerBody alignItems='center' justifyContent='center'>
                        <VStack
                            spacing={4}
                            align='stretch'
                        >
                            <Box h='40px'>
                                <Button
                                    justifyContent="flex-start"
                                    color="blackAlpha.700"
                                    variant="ghost"
                                    borderRadius='lg'
                                    px={4}
                                    w="100%"
                                    onClick={() => navigateLink({ route: NAVIGATE_POSTS })}
                                >
                                    Lista de Posts
                                </Button>
                            </Box>
                            <Box h='40px'>
                                <Button
                                    justifyContent="flex-start"
                                    color="blackAlpha.700"
                                    variant="ghost"
                                    borderRadius='lg'
                                    px={4}
                                    w="100%"
                                    onClick={() => navigateLink({ route: NAVIGATE_POSTS_CREATE })}
                                >
                                    Criar Posts
                                </Button>
                            </Box>
                            <Box h='40px'>
                                <Button justifyContent="flex-start" color="blackAlpha.700" variant="ghost" borderRadius='lg' px={4} w="100%">
                                    Lista de Artigos
                                </Button>
                            </Box>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <ButtonActionSuccess
                            colorButton='teal'
                            icon={<ExternalLinkIcon />}
                            isLoading={false}
                            typeAction='button'
                            description='Sair'
                            action={Logout}
                        />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
