import { Flex, Text } from '@chakra-ui/react'

interface Props {
    title: string
    description: string | undefined
}

export const TextSpaceAround = ({title, description}: Props) => {
  return (
    <Flex justify='space-between'>
        <Text as='b' mb='10' >{title}</Text>
        <Text>{description}</Text>
    </Flex>
  )
}
