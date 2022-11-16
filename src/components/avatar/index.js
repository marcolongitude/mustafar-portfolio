import React from 'react'
import {
    Wrap,
    WrapItem,
    Avatar,
    Button
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function index() {
    return (
        <Wrap>
            <WrapItem flexDirection='column' alignItems='center'>
                <Avatar mb={5} size='2xl' name='Marco Aurélio' src='' />
                <Button colorScheme='teal' variant='outline' rightIcon={<ArrowForwardIcon />}>{' Detalhes '}</Button>
            </WrapItem>
        </Wrap>
    )
}
