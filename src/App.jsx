
import { Stack } from '@chakra-ui/react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ResumeData from './pages/ResumeData'

function App() {

  return (
    <Stack
      minH='100vh'
      className="App"
      bg='rgb(243 244 246)'
    >
      <Header />
      <NavBar />
      <ResumeData />
    </Stack>
  )
}

export default App
