import PreviewDataGroupAccordion from './PreviewDataGroupAccordion'
import PreviewDataProfile from './PreviewDataProfile'

function FullResumeData({ handleOption }) {
    return (
        <>
            <PreviewDataProfile setDisplay={handleOption} />
            <PreviewDataGroupAccordion />
        </>
    )
}

export default FullResumeData