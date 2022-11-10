import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { Login } from './features/auth/Login'
import { Counter } from './features/counter/Counter'
import { PrivateOutlet } from './utils/PrivateOutLet'


function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<PrivateOutlet />} />
      </Routes>
    </Box>
  )
}

export default App
