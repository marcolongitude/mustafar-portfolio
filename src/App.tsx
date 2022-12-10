import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { Login } from './features/auth/Login'
import { Posts } from './features/posts/Posts'
import { CreatePosts } from './features/createPosts/CreatePosts'
import { User } from './features/user/User'
import { PageNotFount } from './features/pageNotFound/PageNotFound'
import { PrivateOutlet } from './utils/PrivateOutLet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/users/details" element={<User />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create" element={<CreatePosts />} />
          <Route path='*' element={<PageNotFount />} />
        </Route>
        <Route path="*" element={<PageNotFount />} />
      </Routes>
      <ToastContainer />
    </Box>
  )
}

export default App
