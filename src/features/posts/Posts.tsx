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
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ButtonActionSuccess } from '../../components/button'
import { isoToDateComplete } from '../../utils/functionsDate'

export const Posts = () => {
    const { data: allPosts, isLoading, isError } = useGetAllPostsQuery()


    return (
        <Box h="calc(100vh - 72px)" p='8'>
            <SimpleGrid minChildWidth='300px' columns={2} spacing={10}>
                {allPosts && allPosts.map((post) => (
                    <Card key={post.id}>
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
                                        {post.description}
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
            </SimpleGrid>
        </Box>
    )
}

export default Posts  