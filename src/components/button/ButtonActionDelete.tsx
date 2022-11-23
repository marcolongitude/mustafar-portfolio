import {
    Button
} from '@chakra-ui/react'


interface Props {
    action: any
    isLoading: boolean | undefined
    description: string
    typeAction: "button" | "reset" | "submit"
    icon: any
    colorButton: "red"
    variantOption?: "ghost" | "outline" | "solid" | "link" | "unstyled"
}

export const ButtonActionDelete = ({ icon, action, isLoading, description, typeAction, colorButton, variantOption = "solid" }: Props) => {
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
            variant={variantOption}
        >
            {description}
        </Button>
    )
}