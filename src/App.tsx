import { Routes, Route } from 'react-router-dom'
import { Box, Center, VStack } from '@chakra-ui/react'

import { Login } from './features/auth/Login'
import { PrivateOutlet } from './utils/PrivateOutLet'


function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PrivateOutlet />}>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
