import { Stack } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import PDFPreview from "../components/PDFPreview"
import ResumeData from "./ResumeData"
import Header from '../components/Header'
import { useRef, useState } from 'react'
import { useReactToPrint } from "react-to-print";
import EditData from "../components/EditData/EditData"

function Home() {

    const [editView, setEditView] = useState(false)
    console.log(editView)
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'MyResume',
    })

    return (
        <>
            <Stack direction={['']} w='100%' py={[0, 0, 10]}>
                <NavBar handlePrint={handlePrint} setEditView={setEditView} />
                <Stack direction={['column']} w='100%' px={[0, 0, 5]} align='center'>
                    <Header handlePrint={handlePrint} />
                    {
                        editView ?
                            <EditData />
                            :
                            <ResumeData />
                    }
                </Stack>
            </Stack>
            <PDFPreview componentRef={componentRef} />
        </>
    )
}

export default Home