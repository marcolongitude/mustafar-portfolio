import React from 'react'
import {
    Button
} from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'

interface ActionButton {
    action: any
    isLoading: boolean
    description: string
    typeAction: "button" | "reset" | "submit"
}

export const ButtonActionSuccess = ({ action, isLoading, description, typeAction, ...props }: ActionButton) => {
    return (
        <Button
            m={3}
            size='md'
            width='100%'
            onClick={action}
            colorScheme="blue"
            isLoading={isLoading}
            rightIcon={<ArrowForwardIcon />}
            type={typeAction}
        >
            Entrar
        </Button>
    )
}
