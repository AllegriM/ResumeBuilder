
import { Stack } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {


  return (
    <Stack
    minH='100vh'
    bg='rgb(243 244 246)'
    px={[0, 0, 8, 20]}
    direction='row'
    h='100%'
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Stack>
  )
}

export default App
