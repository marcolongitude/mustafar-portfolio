interface Props {
    text: string
    limit: number
}

export const limitText = ({ text, limit }: Props): string => {
    const textLimitted = text.substring(0, limit) + ' ...'
    return textLimitted
}

export const formatCel = (phone: string | undefined) => {
    if(!phone) return
    let phoneFormated = phone?.replace(/(\d{2})(\d{5})(\d{4})/,
                        function(regex, arg1, arg2, arg3) {
                            return '(' + arg1 + ') ' + arg2 + '-' + arg3 ;
                        });

    return phoneFormated
}