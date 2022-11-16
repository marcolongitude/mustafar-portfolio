import React, { JSXElementConstructor } from 'react'
import {
    Button
} from '@chakra-ui/react'


interface Props {
    action: any
    isLoading: boolean
    description: string
    typeAction: "button" | "reset" | "submit"
    icon: any
    colorButton: "blue" | "teal"
}

export const ButtonActionSuccess = ({ icon, action, isLoading, description, typeAction, colorButton }: Props) => {
    return (
        <Button
            m={3}
            size='md'
            width='100%'
            onClick={action}
            colorScheme={colorButton}
            isLoading={isLoading}
            type={typeAction}
            rightIcon={icon}
        >
            {description}
        </Button>
    )
}
