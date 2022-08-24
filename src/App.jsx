
import { Stack } from '@chakra-ui/react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PDFPreview from './components/PDFPreview'
import ResumeData from './pages/ResumeData'

function App() {

  return (
    <Stack
      minH='100vh'
      bg='rgb(243 244 246)'
      px={[0, 0, 8, 20]}
      direction='row'
      >
        <Stack direction={['']} w='100%' py={[0, 0, 10]}>
          <NavBar />
          <Stack direction={['column']} w='100%' px={[0, 0, 5]} align='center'>
            <Header />
            <ResumeData />
          </Stack>
        </Stack>
        <PDFPreview />
    </Stack>
  )
}

export default App
