import { Stack } from '@chakra-ui/react'
import PreviewDataGroupAccordion from './PreviewDataGroupAccordion'
import PreviewDataProfile from './PreviewDataProfile'

function FullResumeData({ handleOption, setDataToEdit, setSectionId }) {
    return (
        <Stack maxW={620} w='100%' gap={3}>
            <PreviewDataProfile setDisplay={handleOption} />
            <PreviewDataGroupAccordion setDataToEdit={setDataToEdit} setSectionId={setSectionId} handleOption={handleOption} />
        </Stack>
    )
}

export default FullResumeData