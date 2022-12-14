import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { Login } from './features/auth/Login'
import { Counter } from './features/counter/Counter'
import { PageNotFount } from './features/pageNotFound/PageNotFound'
import { PrivateOutlet } from './utils/PrivateOutLet'



function App() {
  return (
    <Box>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/counter" element={<Counter />} />
          <Route path='*' element={<PageNotFount />} />
        </Route>
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </Box>
  )
}

export default App
