import { Box } from '@chakra-ui/react'
import React from 'react'

interface ChildrenProps {
    children: React.ReactElement | React.ReactElement[]
}

export const ContainerPage = ({ children }: ChildrenProps) => {
    console.log(children)
    return (
        <Box h="calc(100vh - 72px)" p='8'>
            {React.Children.map(children, (child) => (
                child
            ))}
        </Box>
    )
}