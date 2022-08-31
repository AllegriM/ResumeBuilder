
import { Stack } from '@chakra-ui/react'
import { useRef } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PDFPreview from './components/PDFPreview'
import ResumeData from './pages/ResumeData'
import { useReactToPrint } from "react-to-print";

function App() {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'MyResume',
  })

  return (
    <Stack
      minH='100vh'
      bg='rgb(243 244 246)'
      px={[0, 0, 8, 20]}
      direction='row'
      h='100%'
      >
        <Stack direction={['']} w='100%' py={[0, 0, 10]}>
          <NavBar handlePrint={handlePrint} />
          <Stack direction={['column']} w='100%' px={[0, 0, 5]} align='center'>
            <Header handlePrint={handlePrint} />
            <ResumeData />
          </Stack>
        </Stack>
        <PDFPreview componentRef={componentRef} />
    </Stack>
  )
}

export default App
