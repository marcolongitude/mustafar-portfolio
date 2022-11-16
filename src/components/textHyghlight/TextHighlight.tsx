import React from 'react'
import { Highlight } from '@chakra-ui/react'

interface Props {
    description: string
    query: string
}
export default function TextHighlight({ description, query }: Props) {
    return (
        <Highlight
            query={query}
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
            {description}
        </Highlight>
    )
}
