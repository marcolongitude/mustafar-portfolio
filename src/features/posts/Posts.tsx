import { useGetAllPostsQuery } from '../../app/services/posts'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Box,
    Heading,
    Stack,
    StackDivider,
    SimpleGrid,
    ButtonGroup,
    Spinner,
    Flex
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ButtonActionSuccess } from '../../components/button'
import { isoToDateComplete } from '../../utils/functionsDate'
import { limitText } from '../../utils/functionsText'
import { ErrorNotPermission } from '../../components/errorNotPermission'
import { ErrorGeneric } from '../../components/errorGeneric'

export const Posts = () => {
    const { data: allPosts, isLoading, isError, error, } = useGetAllPostsQuery()
    const ERROR: any = error

    console.log(allPosts, isError)
    
    if (!allPosts?.length) return (
        <Flex 
            h="calc(100vh - 72px)" 
            w='100%'
            justifyContent='center'
            alignItems="center"
        >
            <Spinner />
        </Flex>
    )

    return (
        <Box h="calc(100vh - 72px)" p='8'>
            <SimpleGrid 
                minChildWidth='300px' 
                columns={2} 
                spacing={10} 
            >
                {!isError && allPosts && allPosts.map((post) => (
                    <Card key={post.id} minH="350px">
                        <CardHeader>
                            <Heading size='md'>Detalhes do Post</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='2'>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {post.name}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {limitText({ text: post.description, limit: 150 })}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                        <CardFooter justifyContent='space-between' alignItems="center" flexWrap='wrap'>
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                <Text fontSize='md' noOfLines={1}>{isoToDateComplete(post.createAt)}</Text>
                            </Box>
                            <ButtonGroup spacing='2'>
                                <ButtonActionSuccess
                                    colorButton='teal'
                                    icon={<ArrowForwardIcon />}
                                    typeAction="button"
                                    description="Detalhes"
                                    isLoading={isLoading}
                                    action={undefined}
                                    variantOption="ghost"
                                />
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
                {isError && ERROR.status === 401 &&
                    <ErrorNotPermission />
                }
                {isError && ERROR.status !== 401 &&
                    <ErrorGeneric />
                }
            </SimpleGrid>
        </Box>
    )
}

export default Posts  