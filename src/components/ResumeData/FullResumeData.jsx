import { Stack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import PreviewDataGroupAccordion from './PreviewDataGroupAccordion'
import PreviewDataProfile from './PreviewDataProfile'

function FullResumeData({ handleOption, setDataToEdit, setSectionId }) {

    const [source, setSource] = useState(() => localStorage.getItem('image') || null)

    useEffect(() => {
        if (source !== localStorage.getItem('image')) {
            setSource(localStorage.getItem('image'))
        }
    }, [source, setSource])

    return (
        <Stack maxW={620} w='100%' gap={3}>
            <PreviewDataProfile setDisplay={handleOption} imageSrc={source} />
            <PreviewDataGroupAccordion setDataToEdit={setDataToEdit} setSectionId={setSectionId} handleOption={handleOption} />
        </Stack>
    )
}

export default FullResumeData