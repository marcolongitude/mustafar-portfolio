import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'

const NAVIGATE_POSTS: string = '/posts'
const NAVIGATE_POSTS_CREATE: string = '/posts/create'

interface Props {
    key: number
    label: string
    route: string
    icon: any
}

export const propsNavigation: Props[] = [

    {
        key: 1,
        label: 'Criar Posts',
        route: NAVIGATE_POSTS_CREATE,
        icon: AddIcon
    },
    {
        key: 2,
        label: 'Lista de Posts',
        route: NAVIGATE_POSTS,
        icon: HamburgerIcon
    },
]