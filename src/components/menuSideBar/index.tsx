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
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'

import { NavLink } from './navLink'
import { ButtonActionSuccess } from '../button'
import Avatar from '../avatar'

import { propsNavigation } from './dataLinks'


interface SidebarProps {
    isOpenMenu: boolean
    onCloseMenu: any
    icon?: any
}

interface NavigateLinkProps {
    route: string
}

export const SideBar: FC<SidebarProps> = ({ isOpenMenu, onCloseMenu, icon }: SidebarProps) => {
    const btnRef = React.useRef<any>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const NAVIGATE_USER_DETAILS: string = '/users/details'

    const navigateLink = ({ route }: NavigateLinkProps): void => {
        navigate(route)
    }

    const Logout = () => {
        dispatch(logout())
        navigate('/login')
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
                            {propsNavigation.length && propsNavigation.map(nav => (
                                <NavLink
                                    key={nav.key}
                                    link={{
                                        navigation: () => navigateLink({ route: nav.route }),
                                        label: nav.label,
                                        icon: nav.icon
                                    }}
                                />
                            ))}
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
