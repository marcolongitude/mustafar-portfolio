interface Props {
    text: string
    limit: number
}

export const limitText = ({ text, limit }: Props): string => {
    const textLimitted = text.substring(0, limit) + ' ...'
    return textLimitted
}