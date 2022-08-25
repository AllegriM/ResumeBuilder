import { Stack } from '@chakra-ui/react'
import PreviewDataGroupAccordion from './PreviewDataGroupAccordion'
import PreviewDataProfile from './PreviewDataProfile'

function FullResumeData({ handleOption }) {
    return (
        <Stack maxW={620} w='100%'>
            <PreviewDataProfile setDisplay={handleOption} />
            <PreviewDataGroupAccordion />
        </Stack>
    )
}

export default FullResumeData